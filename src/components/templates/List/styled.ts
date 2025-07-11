import styled, { css } from "styled-components";

export const Ol = styled.ol`
    ${({ theme: { Colors, currentTheme } }) => {
        return css`
            color: ${currentTheme === 'light' ? Colors.gray[1000] : Colors.gray[200]};
        `
    }}
`

export const Ul = styled.ul`
    ${({ theme: { Colors, currentTheme } }) => {
        return css`
            color: ${currentTheme === 'light' ? Colors.gray[1000] : Colors.gray[200]};
        `
    }}
`