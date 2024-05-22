// ** config
import themeConfig from '@/configs/themeConfig';

// ** type
import { TSettingLayout } from '@/types/layout';
import { TSettingContextValue } from '@/types/setting-context';

// ** react
import { ReactNode, createContext, useState } from 'react';

const initialSettings: TSettingLayout = {
  themeColor: 'primary',
  mode: themeConfig.mode,
};

type SettingsProviderProps = {
  children: ReactNode;
  pageSettings?: TSettingLayout | void;
};

const SettingContext = createContext<TSettingContextValue>({
  settings: initialSettings,
  saveSettings: () => null,
});

const SettingProvider = ({ children, pageSettings }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<TSettingLayout>({
    ...initialSettings,
  });

  const saveSettings = (newSettings: TSettingLayout) => {};

  return (
    <SettingContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export { SettingProvider, SettingContext };
export const SettingsConsumer = SettingContext.Consumer;
