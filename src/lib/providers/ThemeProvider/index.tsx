export { ThemeContextValues } from './context'
export { Pallete, AppTheme, Theme } from './theme'

import { PropsWithChildren, useContext, useState } from "react"
import { AppTheme, theme, Theme } from "./theme"
import { ThemeContext } from './context'
import { ThemeProvider as StyledThemeProvider } from "styled-components"

export const ThemeProvider = ({ theme: defaultTheme = theme, children }: PropsWithChildren & { theme?: Theme }) => {
    const [currentTheme, setTheme] = useState<AppTheme>('light')
    return (
        <ThemeContext.Provider value={{ currentTheme: currentTheme, setTheme: setTheme }}>
            <StyledThemeProvider theme={{ ...defaultTheme, currentTheme: currentTheme }}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeProvider = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeProvider is using not in ThemeProvider')
    }
    return context
}