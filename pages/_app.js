import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Router from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
import '../styles/main.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/ApolloClient';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif'
  },
  colors: {
    brand: {
      50: '#D2E5F3',
      100: '#ADD3ED',
      200: '#9BCBEC',
      300: '#7AB9E5',
      400: '#8FC8EF',
      500: '#6eb8eb',
      600: '#5BADE6',
      700: '#3793D3',
      800: '#0C82D3',
      900: '#295E83'
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.700'
      }
    },
    Text: {
      baseStyle: {
        color: 'gray.500'
      }
    }
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden'
      }
    }
  }
});

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-WTN8JKL2S2', {
      page_path: url
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
