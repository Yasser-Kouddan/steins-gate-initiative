const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

const workspaceRoot = path.resolve(__dirname);
const config = getDefaultConfig(workspaceRoot);

// Read tsconfig paths and convert to Metro alias
try {
  const tsconfigPath = path.join(workspaceRoot, 'tsconfig.base.json');
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
  const paths = (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) || {};
  const alias = {};
  Object.keys(paths).forEach((key) => {
    const normalized = key.replace(/\/*$/, '');
    const target = paths[key][0].replace(/\/*$/, '').replace(/\*$/, '');
    alias[normalized] = path.resolve(workspaceRoot, target);
  });
  config.resolver = config.resolver || {};
  config.resolver.alias = Object.assign({}, config.resolver.alias || {}, alias);
} catch (e) {
  // ignore if tsconfig not present
}

// Watch the workspace folders so shared libs are visible to Metro
config.watchFolders = config.watchFolders || [];
config.watchFolders.push(path.resolve(workspaceRoot, 'libs'));
config.watchFolders.push(path.resolve(workspaceRoot, 'apps'));

// Do not force global nodeModulesPaths from the workspace root.
// Each app (e.g. apps/reading-steiner) owns its own metro.config.js with
// app-local resolution, and overriding it here can create duplicate graphs.
module.exports = config;
