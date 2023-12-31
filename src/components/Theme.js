import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#5ab2a6',
        color: '#523221',
      },
    },
  },
  colors: {
    brand: {
      main: '#523221',
      creme: '#f6e6c7',
      yellow: '#eec54b',
    },
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'ghost',
      },
      sizes: {
        md: {
          fontSize: '26px',
          fontWeight: '500',
          px: 4,
          py: 7,
        },
      },
    },
  },
});

export default theme;