import { TSettingLayout } from '@/types/layout';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import themeOptions from './themeOptions';

interface Props {
  settings: TSettingLayout;
  children: ReactNode;
}

const ThemeComponent = ({ settings, children }: Props) => {
  let theme = createTheme(themeOptions());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
