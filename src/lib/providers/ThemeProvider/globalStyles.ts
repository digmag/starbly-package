import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        ${({ theme: { Colors, currentTheme } }) => {
        console.log(currentTheme)
        return css`
                background-color: ${currentTheme === 'light' ? Colors.gray[200] : Colors.gray[800]};
            `
    }}
    }
`