import { ComponentProps } from "react"
import { FlexContainerStyled, FlexContainerStyledProps } from "./styled"

type FlexContainerProps = ComponentProps<'div'> & FlexContainerStyledProps

export const FlexContainer = ({ ...props }: FlexContainerProps) => {
    return <FlexContainerStyled {...props} />
}