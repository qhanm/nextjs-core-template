import { ACCESS_TOKEN, REFRESH_TOKEN, USER_DATA } from '@/configs/auth';

const setLocalUserData = (
  userData: string,
  accessToken: string,
  refreshToken: string,
) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(USER_DATA, userData);
    window.localStorage.setItem(ACCESS_TOKEN, accessToken);
    window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
};

const getLocalUserData = () => {
  if (typeof window !== 'undefined') {
    return {
      userData: window.localStorage.getItem(USER_DATA),
      accessToken: window.localStorage.getItem(ACCESS_TOKEN),
      refreshToken: window.localStorage.getItem(REFRESH_TOKEN),
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

export { setLocalUserData, getLocalUserData, clearLocalUserData };
