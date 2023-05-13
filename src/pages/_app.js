import { darkTheme } from '@/helper/themehelper';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
