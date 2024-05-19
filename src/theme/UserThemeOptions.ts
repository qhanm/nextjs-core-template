import { Html } from 'next/document';
import { ThemeOptions } from '@mui/material';

export const UserThemeOptions = (): ThemeOptions => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1920,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
          sizeSmall: {
            padding: '6px 16px',
          },
          sizeMedium: {
            padding: '8px 20px',
          },
          sizeLarge: {
            padding: '10px 24px',
          },
          textSizeSmall: {
            padding: '7px 12px',
          },
          textSizeMedium: {
            padding: '9px 16px',
          },
          textSizeLarge: {
            padding: '12px 16px',
          },
        },
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '16px 24px',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '32px 24px',
            '&:last-child': {
              paddingBottom: '32px',
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            MozOszFontSmoothing: 'grayscale',
          },
        },
      },
    },
  };
};
