// ** Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// ** Config
import themeConfig from '@/configs/themeConfig';

// ** Context
import { AuthProvider } from '@/contexts/AuthContext';

// ** Redux store
import { store } from '@/stores';

// ** Redux
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template.`}
        />
        <meta
          name="keywords"
          content="Material Design, MUI, Admin Template, React Admin Template"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}
