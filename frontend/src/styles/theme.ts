import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      800: '#5636D3',
      900: '#5A28EE'
    },
    pin: {
      700: '#31B404'
    }
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },

  styles: {
    global: {
      body: {
        bg: 'white',
        overflowX: 'hidden'
      }
    }
  }
});
