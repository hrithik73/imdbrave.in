import React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}

export default MyApp;
