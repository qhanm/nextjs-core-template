import { Palette } from '@mui/material';

const DefaultPalette = (mode: Palette['mode']): Palette => {
  // ** Vars
  const whiteColor = '#FFF';
  const lightColor = '47, 43, 61';
  const darkColor = '208, 212, 241';
  const darkPaperBgColor = '#2F3349';
  const mainColor = mode === 'light' ? lightColor : darkColor;

  return {
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor,
    },
    primary: {
      light: '#8479f2',
      main: '#7367f0',
      dark: '#655bd3',
      contrastText: whiteColor,
    },
    secondary: {
      light: '#8479F2',
      main: '#7367F0',
      dark: '#655BD3',
      contrastText: whiteColor,
    },
    error: {
      light: '#ED6F70',
      main: '#EA5455',
      dark: '#CE4A4B',
      contrastText: whiteColor,
    },
    warning: {
      light: '#FFAB5A',
      main: '#FF9F43',
      dark: '#E08C3B',
      contrastText: whiteColor,
    },
    info: {
      light: '#1FD5EB',
      main: '#00CFE8',
      dark: '#00B6CC',
      contrastText: whiteColor,
    },
    success: {
      light: '#42CE80',
      main: '#28C76F',
      dark: '#23AF62',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: `rgba(${mainColor}, 0.78)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.42)`,
    },
    divider: `rgba(${mainColor}, 0.16)`,
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: '#F8F7FA',
    },
    action: {
      activatedOpacity: 0.12,
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      hoverOpacity: 0.04,
      selected: `rgba(${mainColor}, 0.06)`,
      selectedOpacity: 0.06,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      disabledOpacity: 0.38,
      focus: `rgba(${mainColor}, 0.12)`,
      focusOpacity: 0.12,
    },
    tonalOffset: 0.2,
  } as Palette;
};

export default DefaultPalette;
