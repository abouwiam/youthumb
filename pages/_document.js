import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
         	
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
		  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9105212283134972"
     crossorigin="anonymous"></script>
	  
          <meta name="yandex-verification" content="0037e9c2b99e50c2" />
         

        </Head>
        <body>
          {/* The Main component renders your page's content */}
          <Main />

          
    
          <NextScript />
        </body>
		{/* Privacy Policy link */}
          <footer>
            <p><a href="/privacy-policy">Privacy Policy</a></p>
		  </footer>
		  
		  {/* Terms and Conditions link */}
		  <footer>
            <p><a href="/terms-and-conditions">Terms and Conditions</a></p>
          </footer>
		  
		  {/* Contact Us link */}
          <footer>
            <p><a href="/contact-us">Contact Us</a></p>
          </footer>
		  
		  {/* About Us link */}
          <footer>
            <p><a href="/about-us">About Us</a></p>
          </footer>
      </Html>
    );
  }
}

export default MyDocument;
