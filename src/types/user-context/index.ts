type TUserContext = {};
type TAuthValueTypes = {
  loading: boolean;
  logout: () => void;
  user: TUserContext | null;
  setLoading: (value: boolean) => void;
  setUser: (value: TUserContext | null) => void;
  login: () => void;
};

type TLoginForm = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type { TUserContext, TAuthValueTypes, TLoginForm };
