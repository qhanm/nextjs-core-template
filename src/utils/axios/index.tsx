import { BASE_URL } from '@/configs/api';
import { TUserContext } from '@/types/user-context';
import axios from 'axios';
import { NextRouter } from 'next/router';
import { clearLocalUserData } from '../storage';

const instanceAxios = axios.create({ baseURL: BASE_URL });

const handleRedirectLogin = (
  router: NextRouter,
  setUser: (data: TUserContext | null) => void,
) => {
  if (router.asPath === '/') {
    return router.replace({
      pathname: '/login',
      query: { returnUrl: router.asPath },
    });
  }

  router.replace('/login');

  setUser(null);
  clearLocalUserData();
};
