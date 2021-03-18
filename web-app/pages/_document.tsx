import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link
            rel='icon'
            type='image/x-icon'
            href='https://d1unjqcospf8gs.cloudfront.net/favicon.ico'
          />
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='https://d1unjqcospf8gs.cloudfront.net/favicon.ico'
          />
          <link
            href='https://fonts.googleapis.com/earlyaccess/notosanskr.css'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
