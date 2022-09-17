// ./storybook/manager.ts
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
    base: 'dark', // this will inherit the base properties of Storybooks'dark theme

    // Base color
    //colorSecondary: '#45bc5a', // Chateau Green
    //colorSecondary: '#45bc5a', // Chateau Green
    // UI
    //   appBg: '#F6F9FC',
    //   appContentBg: '#FFFFFF',
    //   appBorderColor: 'rgba(0,0,0,.1)',
    //   appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    // textColor: '#333333',
    // textInverseColor: '#FFFFFF',
    // textMutedColor: '#666666',

    // Toolbar default and active colors
    // barTextColor: '#999999',
    // barSelectedColor: '#45bc5a',
    // barBg: '#FFFFFF',

    // Form colors
    // inputBg: '#FFFFFF',
    // inputBorder: 'rgba(0,0,0,.3)',
    // inputTextColor: '#333333',
    // inputBorderRadius: 4,

    // Brand assets
    //brandTitle: '',
    //brandUrl: '',
    //brandImage: //,
});

addons.setConfig({
    theme,
});