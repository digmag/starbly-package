import { ComponentProps, ReactNode } from "react"
import { Ol, Ul } from "./styled"
type commonListProps = Omit<ComponentProps<'ol'>, 'type'> & ComponentProps<'ul'>
interface ListProps<T> extends commonListProps {
    type?: 'ordered' | 'unordered'
    data: Array<T>
    renderTemplate: (template: T) => ReactNode
}

export const List = function <T>({ type = 'unordered', data, renderTemplate, ...props }: ListProps<T>) {
    const Component = type === 'unordered' ? Ul : Ol;
    return (
        <Component {...props}>
            {data.map((temp, idx) =>
                <li key={idx}>
                    {renderTemplate(temp)}
                </li>)}
        </Component>
    )
}