// ** Next
import { NextPage } from 'next';

// ** Views
import LoginView from '@/views/login';

type TProps = {};

const Login: NextPage<TProps> = () => {
  return <LoginView />;
};

export default Login;
