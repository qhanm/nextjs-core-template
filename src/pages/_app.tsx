import { store } from '@/stores';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// ** Redux
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
