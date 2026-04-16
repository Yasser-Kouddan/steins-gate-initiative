// apps/reading-steiner/webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const projectRoot = __dirname;
  const appRoot = path.join(projectRoot, 'app');

  const config = await createExpoWebpackConfigAsync(
    { ...env, projectRoot }, // important: force projectRoot
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
    path.join(projectRoot, 'node_modules'),
    'node_modules',
  ];

  // Optional but helpful: ensure webpack "context" is the app, not the monorepo root
  config.context = projectRoot;

  return config;
};