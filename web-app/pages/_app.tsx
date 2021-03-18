import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { MobileLayout } from 'layouts/MobileLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
        />
      </Head>
      <Global
        styles={css`
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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 16px;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }

          #__next {
            height: 100vh;
            height: calc(100vh - 50px);
          }

          a {
            color: #212529;
            text-decoration: none;
          }
        `}
      />
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </>
  );
}

export default MyApp;
