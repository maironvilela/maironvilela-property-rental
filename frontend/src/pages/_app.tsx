import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
