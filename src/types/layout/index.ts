// ** Mui
import { PaletteMode } from '@mui/material';

type TThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

type TMode = PaletteMode | 'semi-dark';

type TSettingLayout = {
  themeColor: TThemeColor;
  mode: TMode;
};

export type { TSettingLayout, TThemeColor, TMode };
