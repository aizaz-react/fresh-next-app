import { darkTheme } from '@/helper/themehelper';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu:wght@500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
