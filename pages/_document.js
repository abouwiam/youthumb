import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics tracking code */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYYMQMKS6F"></script>
          <script>
            {`
              // Initialize the Google Analytics dataLayer
              window.dataLayer = window.dataLayer || [];
              
              // Define the gtag function for sending events
              function gtag(){dataLayer.push(arguments);}
              
              // Initialize gtag with the current date
              gtag('js', new Date());
              
              // Configure gtag with your tracking ID
              gtag('config', 'G-KYYMQMKS6F');
            `}
          </script>

          {/* Favicon links */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          {/* The Main component renders your page's content */}
          <Main />

          {/* The NextScript component includes the necessary scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
