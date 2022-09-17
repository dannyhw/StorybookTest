module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-typescript",
      "@babel/preset-flow"
    ],
    plugins: [
      [
        "babel-plugin-styled-components"
      ],
      [
        "module-resolver",
        {
          "root": [
            "./src"
          ],
          "extensions": [
            ".jsx",
            ".tsx",
            ".ts",
            ".native.js",
            ".json",
            ".js",
            ".ios.js",
            ".android.js"
          ],
          "alias": {
            "_assets": "./src/stories/assets",
            "_components": "./src/stories/components",
            "_atoms": "./src/stories/components/atoms",
            "_molecules": "./src/stories/components/molecules",
            "_organisms": "./src/stories/components/organisms",
            "_styles": "./src/stories/styles"
          }
        }
      ]
    ]
  };
};
