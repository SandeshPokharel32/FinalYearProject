import '../../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    900: '#309bad',
    800: '#309bad',
    700: '#309bad',
    600: '#309bad',
    500: '#309bad',
    400: '#309bad',
    300: '#309bad',
    200: '#309bad',
    100: '#309bad',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Nunito Sans, sans-serif',
    body: 'Nunito Sans, sans-serif',
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
