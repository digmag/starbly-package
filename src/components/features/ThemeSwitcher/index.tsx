import { ReactNode } from "react"
import { useThemeProvider } from "../../../lib"

type ThemeSwitcherProps = {
    render: (onClick: () => void) => ReactNode
}

export const ThemeSwitcher = ({ render }: ThemeSwitcherProps) => {
    const { currentTheme, setTheme } = useThemeProvider()
    const onClick = () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }
    return render(onClick)
}