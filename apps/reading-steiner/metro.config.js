const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

const appRoot = __dirname;
const repoRoot = path.resolve(appRoot, '../..');
const config = getDefaultConfig(appRoot);

// Read tsconfig paths (from repo root) and convert to Metro alias
try {
  const tsconfigPath = path.join(repoRoot, 'tsconfig.base.json');
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
  const paths = (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) || {};
  const alias = {};
  Object.keys(paths).forEach((key) => {
    const normalized = key.replace(/\/*$/, '');
    const target = paths[key][0].replace(/\/*$/, '').replace(/\*$/, '');
    alias[normalized] = path.resolve(repoRoot, target);
  });
  config.resolver = config.resolver || {};
  config.resolver.alias = Object.assign({}, config.resolver.alias || {}, alias);
} catch (e) {
  // ignore if tsconfig not present
}

// Watch workspace folders so shared libs are visible to Metro
config.watchFolders = config.watchFolders || [];
config.watchFolders.push(path.resolve(repoRoot, 'libs'));
config.watchFolders.push(path.resolve(repoRoot, 'apps'));

// Resolve node modules from the app folder only
config.resolver.nodeModulesPaths = [path.resolve(appRoot, 'node_modules')];

module.exports = config;
