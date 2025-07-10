import styled, { css } from "styled-components";
export const TextStyled = styled.span<{ $type?: 'primary' | 'secondary' }>`
    font-size: 1rem;
    ${({ theme: { Colors, currentTheme }, $type = 'primary' }) => {
        if ($type === 'secondary')
            return css`
        color: ${currentTheme === 'light' ? Colors.gray[600] : Colors.gray[400]};
        `
        return css`
        color: ${currentTheme === 'light' ? Colors.gray[1000] : Colors.gray[200]};
    `}}
`

export const ParagraphStyled = styled.p<{ $type?: 'primary' | 'secondary' }>`
    font-size: 1rem;
    ${({ theme: { Colors, currentTheme }, $type = 'primary' }) => {
        if ($type === 'secondary')
            return css`
        color: ${currentTheme === 'light' ? Colors.gray[600] : Colors.gray[400]};
        `
        return css`
        color: ${currentTheme === 'light' ? Colors.gray[1000] : Colors.gray[200]};
    `}}
`

export const TitleStyled = styled.h1<{ $level?: 1 | 2 | 3 | 4 | 5 }>`
    margin: 0;
    ${({ $level = 1 }) => {
        return css`
            font-size: calc(5rem / ${$level});
        `
    }}
    ${({ theme: { Colors, currentTheme } }) => {
        if (currentTheme === 'light')
            return css`
                color: ${Colors.gray[1000]};
            `
        return css`
            color: ${Colors.gray[200]};
        `
    }}
`