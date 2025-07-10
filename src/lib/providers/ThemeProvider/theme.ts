import { DefaultTheme } from "styled-components/dist/types"


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


export const theme: DefaultTheme = {
    Colors: {
        blue: {
            100: "#EBF8FF",
            200: "#BEE3F8",
            300: "#90CDF4",
            400: "#63B3ED",
            500: "#4299E1",
            600: "#3182CE",
            700: "#2B6CB0",
            800: "#2C5282",
            900: "#2A4365",
            1000: "#1E365B",
        },
        red: {
            100: "#FFF5F5",
            200: "#FED7D7",
            300: "#FEB2B2",
            400: "#FC8181",
            500: "#F56565",
            600: "#E53E3E",
            700: "#C53030",
            800: "#9B2C2C",
            900: "#742A2A",
            1000: "#5C1A1A",
        },
        green: {
            100: "#F0FFF4",
            200: "#C6F6D5",
            300: "#9AE6B4",
            400: "#68D391",
            500: "#48BB78",
            600: "#38A169",
            700: "#2F855A",
            800: "#276749",
            900: "#22543D",
            1000: "#1C4532",
        },
        gray: {
            100: "#F7FAFC",
            200: "#EDF2F7",
            300: "#E2E8F0",
            400: "#CBD5E0",
            500: "#A0AEC0",
            600: "#718096",
            700: "#4A5568",
            800: "#2D3748",
            900: "#1A202C",
            1000: "#171923",
        },
        yellow: {
            100: "#FFFFF0",
            200: "#FEFCBF",
            300: "#FAF089",
            400: "#F6E05E",
            500: "#ECC94B",
            600: "#D69E2E",
            700: "#B7791F",
            800: "#975A16",
            900: "#744210",
            1000: "#5F370E",
        },
        orange: {
            100: "#FFFAF0",
            200: "#FEEBC8",
            300: "#FBD38D",
            400: "#F6AD55",
            500: "#ED8936",
            600: "#DD6B20",
            700: "#C05621",
            800: "#9C4221",
            900: "#7B341E",
            1000: "#652B19",
        },
        white: {
            1000: "#FFFFFF",
        },
        black: {
            1000: "#000000",
        },
    },
    breakpoints: {
        xs: '768px',
        md: '1024px',
        lg: '1366px',
        xl: '1920px',
        xxl: '2560px'
    },
    currentTheme: 'light'
}