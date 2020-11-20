import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  fontWeights: {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    900: 900
  },
  palette: {
    brand: {
      blueRibbon: '#0064FF',
      blueRibbonLight: '#0064FF26',
      persianBlue: '#2244BF',
      pickledBluewood: '#2E384D',
      midnight: '#001C41',
      shuttleGray: '#5A6872'
    },
    blackGrayBrand: {
      black1: '#2E384D',
      black2: '#536479',
      black3: '#768AA2',
      gray1: '#B3BECB',
      gray2: '#D1D8E0',
      gray3: '#F0F2F5',
      white: '#FFFFFF'
    },
    // The dark version are used to hover buttons and main for active
    primary: {
      light: '#E5F0FF',
      main: '#0064FF',
      dark: '#0047B3'
    },
    default: {
      light: '#E1E5EA',
      main: '#768AA2',
      dark: '#536479'
    },
    error: {
      light: '#F9D2D2',
      main: '#E22C2C',
      dark: '#9D1515'
    },
    success: {
      light: '#DCF5DB',
      main: '#2FA12B',
      dark: '#237920'
    },
    warning: {
      light: '#FDF0CE',
      main: '#F7C137',
      dark: '#AB7D07'
    },
    info: {
      light: '#D2F4F9',
      main: '#17A2B8',
      dark: '#148C9F'
    }
  },
  typography: {
    families: {
      roboto: ['Roboto', 'sans-serif'].join(','),
      robotoMono: ['Roboto+Mono', 'monospace'].join(',')
    },
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10,
    useNextVariants: true
  }
})

export default theme
