import { ComponentProps } from "react"
import { ParagraphStyled, TextStyled, TitleStyled } from "./styled"

type ShortTextProps = {
    type?: 'primary' | 'secondary'
} & ComponentProps<'span'>

export const ShortText = ({ type = 'primary', ...props }: ShortTextProps) => {
    return <TextStyled $type={type} {...props} />
}

type ParagraphProps = {
    type?: 'primary' | 'secondary'
} & ComponentProps<'p'>

export const Paragraph = ({ type, ...props }: ParagraphProps) => {
    return <ParagraphStyled $type={type} {...props} />
}

type TitleProps = {
    level?: 1 | 2 | 3 | 4 | 5
} & ComponentProps<'h1'>

export const Title = ({ level = 1, ...props }: TitleProps) => {
    return <TitleStyled $level={level} {...props} />
}