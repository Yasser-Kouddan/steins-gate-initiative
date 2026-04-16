// apps/reading-steiner/webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const projectRoot = __dirname;
  const appRoot = path.resolve(projectRoot, 'app');
  const appNodeModules = path.resolve(projectRoot, 'node_modules');
  const workspaceNodeModules = path.resolve(projectRoot, '../../node_modules');

  // In Nx monorepos, ensure router context generation is anchored to the app.
  process.env.EXPO_ROUTER_APP_ROOT = appRoot;

  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      projectRoot, // force app-local project root
      EXPO_ROUTER_APP_ROOT: appRoot,
    },
    argv
  );

  // Ensure EXPO_ROUTER_APP_ROOT is available INSIDE the bundle
  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.EXPO_ROUTER_APP_ROOT': JSON.stringify(appRoot),
    })
  );

  // Prevent the same file being included twice via symlink/real paths
  config.resolve = config.resolve || {};
  config.resolve.symlinks = false;

  // In a "no-hoist / per-project node_modules" repo, force webpack to resolve
  // deps from THIS app first, otherwise you can accidentally pull a second copy.
  config.resolve.modules = [
    appNodeModules,
    workspaceNodeModules,
    'node_modules',
  ];
  config.resolveLoader = config.resolveLoader || {};
  config.resolveLoader.modules = [
    appNodeModules,
    workspaceNodeModules,
    'node_modules',
  ];

  // Keep webpack context app-local to avoid alternate route roots from workspace cwd.
  config.context = projectRoot;

  return config;
};
