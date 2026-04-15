// JS entry that re-exports the TypeScript `App.tsx` so Expo/Webpack finds a concrete entry.
module.exports = require('./App').default || require('./App');
