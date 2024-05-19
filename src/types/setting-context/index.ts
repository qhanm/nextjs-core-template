import { Settings } from '../layout';

type TSettingContextValue = {
  settings: Settings;
  saveSettings: (values: Settings) => void;
};

export type { TSettingContextValue };
