import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import AppProvider from '../hooks';
import '../styles/global.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
