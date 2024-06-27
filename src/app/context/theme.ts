import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#ffd333',
      main: '#FFC800',
      dark: '#b28c00',
      contrastText: '#000',
    },
    secondary: {
      light: '#5393ff',
      main: '#2979ff',
      dark: '#1c54b2',
      contrastText: '#FFF',
    },
    background: {
      default: '#E0F7FA',
      paper: '#FFF',
    },
  },
})

const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#ffd333',
      main: '#FFC800',
      dark: '#b28c00',
      contrastText: '#000',
    },
    secondary: {
      light: '#5393ff',
      main: '#2979ff',
      dark: '#1c54b2',
      contrastText: '#FFF',
    },
    background: {
      default: '#102027',
      paper: '#1A373F',
    },
  },
})

export { lightTheme, darkTheme }
