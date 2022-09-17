// styled.d.ts
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import 'styled-components/native';

interface IPalette {
    main: string
    contrastText: string
}

interface IFocusState {
    active: number
    idle: number
}

interface IBorderSize {
    regular: number
    large: number
}

interface IBorderRadius {
    small: number
    regular: number
    medium: number
    large: number
}

declare module 'styled-components/native' {
    export interface DefaultTheme {
        name: string
        palette: {
            common: {
                black: string
                white: string
            }
            actions: {
                success: string
                warning: string
                alert: string
            }
            gray: {
                light: string
                medium: string
                dark: string
            }
            background: IPalette
            brightPrimary?: IPalette
            primary: IPalette
            secondary: IPalette
            accent: string

            iconActive: string
            iconIdle: string

            lingraPrimaryBackground?: string
            lingraSecondaryBackground?: string
            lingraBorderColor?: string

        }
        finishings: {
            border: {
                borderSize: IBorderSize
                borderRadius: IBorderRadius,
                borderImageSlice?: number,
            }
            opacity: {
                focusable: IFocusState
                elements: {
                    multiButton: IFocusState
                    type: {
                        input: Float
                        panel: Float
                    }
                }
            }
        }
    }
}