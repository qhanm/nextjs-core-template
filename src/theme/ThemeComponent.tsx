import { TSettingLayout } from '@/types/layout';
import { TSettingContextValue } from '@/types/setting-context';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  settings: TSettingLayout;
  children: ReactNode;
}

const ThemeComponent = ({ settings, children }: Props) => {
  let theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
