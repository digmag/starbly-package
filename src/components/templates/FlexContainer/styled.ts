import { CSSProperties } from "react";
import styled, { css } from "styled-components";

export type FlexContainerStyledProps = {
    flexDirection?: CSSProperties['flexDirection']
    align?: CSSProperties['alignItems']
    justify?: CSSProperties['justifyContent']
    gap?: CSSProperties['gap']
    width?: CSSProperties['width']
    height?: CSSProperties['height']
}

export const FlexContainerStyled = styled.div<FlexContainerStyledProps>`
    display: flex;
    ${({
    flexDirection = 'row',
    align,
    justify,
    gap,
    width,
    height
}) => {
        return css`
            flex-direction: ${flexDirection};
            align-items: ${align};
            justify-content: ${justify};
            gap: ${gap};
            width: ${width};
            height: ${height};
        `
    }}
`