import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $variant?: 'primary' | 'secondary' | 'success' | 'danger' }>`
    border: none;
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    outline: none;
    &:active{
        opacity: 0.3;
    }
    ${({ theme: { Colors, currentTheme }, $variant = 'primary' }) => {
        if (currentTheme === 'light') {
            switch ($variant) {
                case "primary":
                    return css`
                        background-color: ${Colors.blue[600]};
                        color: ${Colors.gray[200]};
                        &:hover {
                            background-color: ${Colors.blue[800]};
                        }
                    `
                case "secondary":
                    return css`
                        background-color: ${Colors.blue[300]};
                        color: ${Colors.blue[800]};
                        &:hover {
                            background-color: ${Colors.blue[600]};
                            color: ${Colors.blue[1000]};
                        }
                    `
                case "success":
                    return css`
                        background-color: ${Colors.green[200]};
                        color: ${Colors.green[800]};
                        &:hover {
                            background-color: ${Colors.green[600]};
                            color: ${Colors.green[1000]};
                        }
                    `
                case "danger":
                    return css`
                        background-color: ${Colors.red[200]};
                        color: ${Colors.red[800]};
                        &:hover {
                            background-color: ${Colors.red[600]};
                            color: ${Colors.red[1000]};
                        }
                    `
            }
        }
        switch ($variant) {
            case "primary":
                return css`
                    background-color: ${Colors.blue[300]};
                    color: ${Colors.gray[700]};
                    &:hover {
                        background-color: ${Colors.blue[200]};
                    }
                `
            case "secondary":
                return css`
                    background-color: ${Colors.blue[500]};
                    color: ${Colors.gray[400]};
                    &:hover {
                        background-color: ${Colors.blue[200]};
                    }
                `
            case "success":
                return css`
                    background-color: ${Colors.green[600]};
                    color: ${Colors.green[200]};
                    &:hover {
                        background-color: ${Colors.green[400]};
                    }
                `
            case "danger":
                return css`
                    background-color: ${Colors.red[600]};
                    color: ${Colors.red[200]};
                    &:hover {
                        background-color: ${Colors.red[400]};
                    }
                `
        }
    }}
`