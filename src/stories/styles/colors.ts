/**
 * All Theme Structure:
 * Index is relative to parent.
 * 
 * Background - 0
 * 
 * Header - 5
 * footer navbar - 5
 * 
 * avatar - 10
 * 
 * 
 */

// COMMON
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

// ACTIONS
export const SUCCESS = '#3adb76';
export const WARNING = '#ffae00';
export const ALERT = '#ff583c';

// GRAYSCALE
export const GRAY_LIGHT = '#e6e6e6';
export const GRAY_MEDIUM = '#cacaca';
export const GRAY_DARK = '#8a8a8a';

export const darkPurplePalette = {

    /**
     * Background color.
     * white large text: min 34% opacity
     * white normal text: min 45% opacity
     */
    background: '#0E0F29',
    backgroundContrastText: WHITE,
    /**
     * Primary background color.
     * white large text: min 34% opacity
     * white normal text: min 53% opacity
     * 
     * Used for:
     * Header BG, BottomNav BG
     */
    brightPrimary: '#7C5CFC',
    bPrimaryContrastText: WHITE,
    primary: '#1C1E42',
    primaryContrastText: WHITE,

    /**
    * Applied to:
    *  Template Panels
    *  Data Entry
    * 
    * Apply opacity modifier to selected / notSelected input fields using modifier const.
    */
    secondary: '#181933',
    secondaryContrastText: WHITE,

    /**
     * Gradient panel types
     * CSS prop: background-image
     */
    lingraPrimaryBackground: 'linear-gradient(76.64deg, rgba(120, 108, 255, 0.25), rgba(90, 200, 250, 0.2))',
    lingraSecondaryBackground: 'linear-gradient(180deg, rgba(92, 94, 158, 0.5), rgba(65, 67, 119, 0.5))',
    lingraContrastText: WHITE,



    //smaller component colors
    iconActive: '#9662F1',
    iconIdle: WHITE,
    accent: '#F5634A',

    /**
     * border: 0.8px solid rgba(124, 92, 252, 0.6);
     */

    //Not sure if these should go in theme yet
    linearGradientPanelBorderRadius: 8,
    itemPanelBorderRadius: 10,
}

