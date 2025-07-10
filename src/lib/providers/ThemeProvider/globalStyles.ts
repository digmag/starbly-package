import { createGlobalStyle, css } from "styled-components";
import { AppTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ $currentTheme?: AppTheme }>`
    body{
        ${({ $currentTheme = 'light', theme: { Colors } }) => {
        return css`
                background-color: ${$currentTheme === 'light' ? Colors.gray[200] : Colors.gray[800]};
            `
    }}
    }
`