export { ThemeContextValues } from './context'
export { Pallete, AppTheme } from './theme'

import { PropsWithChildren, useContext, useState } from "react"
import { AppTheme, theme } from "./theme"
import { ThemeContext } from './context'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components"
import { GlobalStyles } from './globalStyles'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

export const ThemeProvider = ({ theme: defaultTheme = theme, children }: PropsWithChildren & { theme?: DefaultTheme }) => {
    const [currentTheme, setTheme] = useState<AppTheme>('light')
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <ThemeContext.Provider value={{ currentTheme: currentTheme, setTheme: setTheme }}>
                <StyledThemeProvider theme={{ ...defaultTheme, currentTheme: currentTheme }}>
                    {children}
                    <GlobalStyles />
                </StyledThemeProvider>
            </ThemeContext.Provider>
        </StyleSheetManager>
    )
}

export const useThemeProvider = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeProvider is using not in ThemeProvider')
    }
    return context
}