module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "alias": {
          "src": "./src",
          "components": "./src/components",
          "assets": "./src/assets",
          "hooks": "./src/hooks",
          "global": "./src/global",
          "route": "./src/route",
          "store": "./src/store"
        }
      }
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};