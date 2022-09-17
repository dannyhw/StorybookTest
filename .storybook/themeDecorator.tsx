import React from "react"
import { ThemeProvider } from "styled-components";
import { appDarkPurple } from '../src/stories/styles/appTheme';

export const ThemeDecorator = (Story: any) => (
    <ThemeProvider theme={appDarkPurple}>{Story()}</ThemeProvider>
)