import { ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';
import palette from './palette';
import defaultOption from './defaulOption';

const themeOptions = () => {
  const userThemeConfig: ThemeOptions = Object.assign({}, defaultOption);

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      palette: palette('dark'),
    },
    userThemeConfig,
  );

  return mergedThemeConfig;
};

export default themeOptions;
