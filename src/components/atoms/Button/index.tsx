import { ComponentProps } from "react"
import { ButtonStyled } from "./styled"

interface ButtonProps extends ComponentProps<'button'> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger'
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
    return (
        <ButtonStyled $variant={variant} {...props} />
    )
}