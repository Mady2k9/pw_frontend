import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalProvider } from '@/contexts/global';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  </QueryClientProvider>;
}
