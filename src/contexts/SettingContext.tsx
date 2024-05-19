import themeConfig from '@/configs/themeConfig';
import {
  AppBar,
  ContentWidth,
  Footer,
  Mode,
  Settings,
  Skin,
  ThemeColor,
  VerticalNavToggle,
} from '@/types/layout';
import { TSettingContextValue } from '@/types/setting-context';
import { Direction } from '@mui/material';
import { ReactNode, createContext, useState } from 'react';

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  footer: themeConfig.footer,
  layout: themeConfig.layout,
  lastLayout: themeConfig.layout,
  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  appBarBlur: themeConfig.appBarBlur,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  toastPosition: themeConfig.toastPosition,
  verticalNavToggleType: themeConfig.verticalNavToggleType,
  appBar:
    themeConfig.layout === 'horizontal' && themeConfig.appBar === 'hidden'
      ? 'fixed'
      : themeConfig.appBar,
};

export type PageSpecificSettings = {
  skin?: Skin;
  mode?: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean; // navigation menu
  appBarBlur?: boolean;
  direction?: Direction;
  navCollapsed?: boolean;
  themeColor?: ThemeColor;
  contentWidth?: ContentWidth;
  layout?: 'vertical' | 'horizontal';
  lastLayout?: 'vertical' | 'horizontal';
  verticalNavToggleType?: VerticalNavToggle;
  toastPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};

type SettingsProviderProps = {
  children: ReactNode;
  pageSettings?: PageSpecificSettings | void;
};

const SettingContext = createContext<TSettingContextValue>({
  settings: initialSettings,
  saveSettings: () => null,
});

const SettingProvider = ({ children, pageSettings }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (newSettings: Settings) => {};

  return (
    <SettingContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export { SettingProvider, SettingContext };
export const SettingsConsumer = SettingContext.Consumer;
