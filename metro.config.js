const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {resolver: {
  extraNodeModules: {
    assets: __dirname + '/src/assets',
    components: __dirname + '/src/components',
    hooks: __dirname + '/src/hooks',
    global: __dirname + '/src/global',
    route: __dirname + '/src/route',
    src: __dirname + '/src',
    store: __dirname + '/src/store'
  }}
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
