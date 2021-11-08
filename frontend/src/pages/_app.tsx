import { ChakraProvider } from '@chakra-ui/react';

import AppProvider from '../hooks';
import '../styles/global.scss';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
