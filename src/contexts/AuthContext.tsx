// ** React
import { ReactNode, createContext, useState } from 'react';

// ** Types
import { TAuthValueTypes } from '@/types/user-context';

type Props = {
  children: ReactNode;
};

const initContext: TAuthValueTypes = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(initContext);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(initContext.user);
  const [loading, setLoading] = useState(initContext.loading);

  const login = () => {};
  const logout = () => {};

  const values = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
