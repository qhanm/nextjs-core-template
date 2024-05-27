// ** config
import themeConfig from '@/configs/themeConfig';

// ** type
import { TSettingLayout } from '@/types/layout';
import { TSettingContextValue } from '@/types/setting-context';
import { restoreSetting, storeSettings } from '@/utils/storage';

// ** react
import { ReactNode, createContext, useEffect, useState } from 'react';

const initialSettings: TSettingLayout = {
  themeColor: 'primary',
  mode: themeConfig.mode,
};

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingContext = createContext<TSettingContextValue>({
  settings: initialSettings,
  saveSettings: () => null,
});

const SettingProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<TSettingLayout>({
    ...initialSettings,
  });

  useEffect(() => {
    const restoredSettings = restoreSetting(initialSettings);

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (newSettings: TSettingLayout) => {
    storeSettings(newSettings);
    setSettings(newSettings);
  };

  return (
    <SettingContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export { SettingProvider, SettingContext };
export const SettingsConsumer = SettingContext.Consumer;
