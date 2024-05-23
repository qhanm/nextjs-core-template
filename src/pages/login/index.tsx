// ** Next
import { NextPage } from 'next';

// ** Views
import LoginView from '@/views/pages/login';
import { ReactNode } from 'react';
import AuthLayout from '@/views/layouts/AuthLayout.';

type TProps = {};

const Login: NextPage<TProps> = () => {
  return <LoginView />;
};

Login.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default Login;
