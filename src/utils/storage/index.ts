import { LOCAL_KEY } from '@/configs/local-key';
import { TSettingLayout } from '@/types/layout';

const setLocalUserData = (
  userData: string,
  accessToken: string,
  refreshToken: string,
) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LOCAL_KEY.USER_DATA, userData);
    window.localStorage.setItem(LOCAL_KEY.ACCESS_TOKEN, accessToken);
    window.localStorage.setItem(LOCAL_KEY.REFRESH_TOKEN, refreshToken);
  }
};

const getLocalUserData = () => {
  if (typeof window !== 'undefined') {
    return {
      userData: window.localStorage.getItem(LOCAL_KEY.USER_DATA),
      accessToken: window.localStorage.getItem(LOCAL_KEY.ACCESS_TOKEN),
      refreshToken: window.localStorage.getItem(LOCAL_KEY.REFRESH_TOKEN),
    };
  }

  return {
    userData: '',
    accessToken: '',
    refreshToken: '',
  };
};

const clearLocalUserData = () => {
  if (typeof window !== 'undefined') {
    return {
      userData: '',
      accessToken: '',
      refreshToken: '',
    };
  }
};

const restoreSetting = (initial: TSettingLayout): TSettingLayout | null => {
  let settings = initial;

  try {
    const storeData: string | null = localStorage.getItem(LOCAL_KEY.SETTING);
    if (storeData) {
      settings = { ...JSON.parse(storeData) };
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
};

const storeSettings = (settings: TSettingLayout) => {
  const initialSettings = Object.assign({}, settings);

  localStorage.setItem(LOCAL_KEY.SETTING, JSON.stringify(initialSettings));
};

export {
  setLocalUserData,
  getLocalUserData,
  clearLocalUserData,
  restoreSetting,
  storeSettings,
};
