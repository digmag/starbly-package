import { DefaultTheme } from "styled-components";

export type Pallete = {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    1000: string
}

export type AppTheme = 'light' | 'dark'

export interface Theme extends DefaultTheme {
    Colors: {
        blue: Pallete
        red: Pallete
        yellow: Pallete
        orange: Pallete
        green: Pallete
        black: string
        white: string
    },
    currentTheme: AppTheme
}

export const theme: Theme = {
    currentTheme: 'light',
    Colors: {
        black: '#000',
        white: '#fff',
        blue: {
            100: '#00f',
            200: '#00f',
            300: '#00f',
            400: '#00f',
            500: '#00f',
            600: '#00f',
            700: '#00f',
            800: '#00f',
            900: '#00f',
            1000: '#00f',
        },
        red: {
            100: '#f00',
            200: '#f00',
            300: '#f00',
            400: '#f00',
            500: '#f00',
            600: '#f00',
            700: '#f00',
            800: '#f00',
            900: '#f00',
            1000: '#f00',
        },
        yellow: {
            100: '#ff0',
            200: '#ff0',
            300: '#ff0',
            400: '#ff0',
            500: '#ff0',
            600: '#ff0',
            700: '#ff0',
            800: '#ff0',
            900: '#ff0',
            1000: '#ff0',
        },
        orange: {
            100: '#f00',
            200: '#f00',
            300: '#f00',
            400: '#f00',
            500: '#f00',
            600: '#f00',
            700: '#f00',
            800: '#f00',
            900: '#f00',
            1000: '#f00',
        },
        green: {
            100: '#0ff',
            200: '#0ff',
            300: '#0ff',
            400: '#0ff',
            500: '#0ff',
            600: '#0ff',
            700: '#0ff',
            800: '#0ff',
            900: '#0ff',
            1000: '#0ff',
        },
    }
}