// ** types
import { TSettingLayout } from '../layout';

type TSettingContextValue = {
  settings: TSettingLayout;
  saveSettings: (values: TSettingLayout) => void;
};

export type { TSettingContextValue };
