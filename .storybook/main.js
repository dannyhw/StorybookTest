//main.js
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@react-theming/storybook-addon",
  ],
  framework: "@storybook/react",
};
