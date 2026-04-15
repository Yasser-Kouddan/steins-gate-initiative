const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const appEnv = process.env.APP_ENV || 'development';

module.exports = {
  name: 'Reading Steiner',
  slug: 'reading-steiner',
  version: '0.1.0',
  orientation: 'portrait',
  scheme: process.env.EXPO_SCHEME || 'readingsteiner',
  platforms: ['ios', 'android', 'web'],
  extra: {
    appEnv,
  },
  experiments: {
    typedRoutes: true,
  },
};
