import type { AppProps } from 'next/app';
import Head from 'next/head';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { css, Global } from '@emotion/react';

import { MobileLayout } from 'layouts/MobileLayout';
import { GlobalProvider } from '@utils/contextAPI/store';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>INIT</title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
        />
        <noscript>You should use javascript</noscript>
      </Head>
      <Global styles={globalStyle} />
      <GlobalProvider>
        <MobileLayout>
          <Component {...pageProps} />
        </MobileLayout>
      </GlobalProvider>
    </>
  );
}

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    ::selection {
      background: #c5c5c5;
      color: rgb(0, 0, 0);
    }
  }

  html {
    color: #212529;
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Noto Sans KR';
    background-color: #f9f9f9;
  }

  #__next {
    max-width: 500px;
    margin: 0 auto;
    background-color: #ffffff;
    height: calc(100vh - 50px);
  }

  a {
    color: #212529;
    text-decoration: none;
  }
`;
