import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalProvider } from '@/contexts/global';
import { GoogleTagManager } from '@next/third-parties/google';

const GTM_ID = 'GTM-TGJHCW7D';
export default function App({ Component, pageProps }: AppProps) {
  return <GlobalProvider>
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={GTM_ID} />
      {/*<GoogleAnalytics gaId="G-9RN512817V" />*/}

    </>
  </GlobalProvider>;
}
