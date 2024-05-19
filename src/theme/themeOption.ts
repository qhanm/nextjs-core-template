import { TSettingContextValue } from '@/types/setting-context';
import { PaletteMode, ThemeOptions } from '@mui/material';
import { UserThemeOptions } from './UserThemeOptions';
import { deepmerge } from '@mui/utils';
import breakpoints from './breakpoints';
const themeOptions = (
  settings: TSettingContextValue,
  overrideMode: PaletteMode,
): ThemeOptions => {
  const { skin, mode, direction, themeColor } = settings;

  const userThemeConfig: ThemeOptions = Object.assign({}, UserThemeOptions());

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
    },
    userThemeConfig,
  );
};
