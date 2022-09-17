import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { withThemes } from '@react-theming/storybook-addon';
import { appDarkPurple } from '../src/stories/styles/appTheme';
import { addDecorator } from '@storybook/react';

/*
  This call makes the Storybook screen go white when clicking on the Actions tab.
*/
addDecorator(withThemes(ThemeProvider, [appDarkPurple]));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Tried this as well as the uncommented above.
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={appDarkPurple}>
//       <Story />
//     </ThemeProvider>
//   )
// ]