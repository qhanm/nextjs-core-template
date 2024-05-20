import { TSettingContextValue } from '@/types/setting-context';
import { PaletteMode, ThemeOptions } from '@mui/material';
import { UserThemeOptions } from './UserThemeOptions';
import { deepmerge } from '@mui/utils';
import breakpoints from './breakpoints';
const themeOptions = (
  settings: TSettingContextValue,
  overrideMode: PaletteMode,
): ThemeOptions => {
  const userThemeConfig: ThemeOptions = Object.assign({}, UserThemeOptions());

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      direction,
    },
    userThemeConfig,
  );

  return deepmerge(mergedThemeConfig, {
    palette: {},
  });
};
