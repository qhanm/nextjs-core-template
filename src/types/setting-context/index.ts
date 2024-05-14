import { Settings } from 'http2';

type TSettingContextValue = {
  settings: Settings;
  saveSettings: (values: Settings) => void;
};

export type { TSettingContextValue };
