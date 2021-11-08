import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      800: '#5636D3'
    },
    green: {
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
        overflowY: 'hidden'
      }
    }
  }
});
