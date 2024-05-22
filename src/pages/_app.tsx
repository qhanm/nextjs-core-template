// ** Next
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';

// ** Config
import themeConfig from '@/configs/themeConfig';

// ** Context
import { AuthProvider } from '@/contexts/AuthContext';
import { SettingProvider, SettingsConsumer } from '@/contexts/SettingContext';

// ** Redux store
import { store } from '@/stores';

// ** Redux
import { Provider } from 'react-redux';

// ** Theme
import ThemeComponent from '@/theme/ThemeComponent';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

export default function App({ Component, pageProps }: ExtendedAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <>{page}</>);

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
        <SettingProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={settings}>
                  {getLayout(<Component {...pageProps} />)}
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingProvider>
      </AuthProvider>
    </Provider>
  );
}
