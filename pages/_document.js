import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='Rumah Sakit Services Website' />
          <link
            rel='icon'
            href='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          />
          <meta
            property='og:image'
            content='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          ></meta>
          <link
            rel='image_src'
            href='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          ></link>
          <meta
            property='twitter:image'
            content='https://www.linkpicture.com/q/RUMAH-SAKIT-SERVICES-modified.png'
          ></meta>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-WTN8JKL2S2'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WTN8JKL2S2', { page_path: window.location.pathname }); 
            `
            }}
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
