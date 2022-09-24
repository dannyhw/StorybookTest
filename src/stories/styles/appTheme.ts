import { Colors, Finishings } from "_styles";

//https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3

export const appDarkPurple = {
  name: "DarkPurple",
  palette: {
    text: {},
    common: {
      black: Colors.BLACK,
      white: Colors.WHITE,
    },
    actions: {
      success: Colors.SUCCESS,
      alert: Colors.ALERT,
      warning: Colors.WARNING,
    },
    gray: {
      dark: Colors.GRAY_DARK,
      light: Colors.GRAY_LIGHT,
      medium: Colors.GRAY_MEDIUM,
    },
    background: {
      main: Colors.darkPurplePalette.background,
      contrastText: Colors.darkPurplePalette.backgroundContrastText,
    },
    brightPrimary: {
      main: Colors.darkPurplePalette.brightPrimary,
      contrastText: Colors.darkPurplePalette.bPrimaryContrastText,
    },
    primary: {
      main: Colors.darkPurplePalette.primary,
      contrastText: Colors.darkPurplePalette.primaryContrastText,
    },
    secondary: {
      main: Colors.darkPurplePalette.secondary,
      contrastText: Colors.WHITE,
    },
    accent: Colors.darkPurplePalette.accent,
    iconActive: Colors.darkPurplePalette.iconActive,
    iconIdle: Colors.darkPurplePalette.iconIdle,

    lingraPrimaryBackground: Colors.darkPurplePalette.lingraPrimaryBackground,
    lingraSecondaryBackground:
      Colors.darkPurplePalette.lingraSecondaryBackground,
  },
  finishings: {
    border: {
      borderRadius: Finishings.BORDER_RADIUS,
      borderSize: Finishings.BORDER_SIZE,
      borderImageSlice: 1,
    },
    opacity: {
      focusable: Finishings.OPACITY_MODIFIER.focusable,
      elements: {
        multiButton: Finishings.OPACITY_MODIFIER.background.multiButton,
        type: Finishings.OPACITY_MODIFIER.background.type,
      },
    },
  },
};
