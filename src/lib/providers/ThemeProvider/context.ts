import { createContext } from "react";
import { AppTheme } from "./theme";

export type ThemeContextValues = {
    currentTheme: AppTheme
    setTheme: (theme: AppTheme) => void
}

export const ThemeContext = createContext<ThemeContextValues | undefined>(undefined)