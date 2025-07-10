import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $variant?: 'primary' | 'secondary' | 'success' | 'danger' }>`
    border: none;
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    outline: none;
    ${({ theme: { Colors, currentTheme }, $variant = 'primary' }) => {
        if (currentTheme === 'light') {
            switch ($variant) {
                case "primary":
                    return css`
                        background-color: ${Colors.blue[600]};
                        color: ${Colors.gray[200]};
                        &:hover {
                            background-color: ${Colors.blue[1000]};
                        }
                    `
                case "secondary":
                    return css`
                        background-color: ${Colors.blue[400]};
                        color: ${Colors.blue[800]};
                        &:hover {
                            background-color: ${Colors.blue[600]};
                            color: ${Colors.blue[1000]};
                        }
                    `
                case "success":
                    return css`
                        background-color: ${Colors.green[400]};
                        color: ${Colors.green[800]};
                        &:hover {
                            background-color: ${Colors.green[600]};
                            color: ${Colors.green[1000]};
                        }
                    `
                case "danger":
                    return css`
                        background-color: ${Colors.red[400]};
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
                    background-color: ${Colors.blue[800]};
                    color: ${Colors.gray[500]};
                    :hover {
                        background-color: ${Colors.blue[400]};
                    }
                `
            case "secondary":
                return css`
                    background-color: ${Colors.blue[500]};
                    color: ${Colors.blue[700]};
                    :hover {
                        background-color: ${Colors.blue[200]};
                    }
                `
            case "success":
                return css`
                    background-color: ${Colors.green[400]};
                    color: ${Colors.green[600]};
                    :hover {
                        background-color: ${Colors.green[200]};
                    }
                `
            case "danger":
                return css`
                    background-color: ${Colors.red[400]};
                    color: ${Colors.red[700]};
                    :hover {
                        background-color: ${Colors.red[200]};
                    }
                `
        }
    }}
`