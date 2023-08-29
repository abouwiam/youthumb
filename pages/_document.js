import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYYMQMKS6F"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());

              gtag('config', 'G-KYYMQMKS6F');
            `}
          </script>
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
          <div>
            
            <p>Discover the easiest way to obtain high-quality YouTube video thumbnails with our Thumbnail Downloader. Quickly access and download YouTube video previews using our efficient Thumbnail Downloader YouTube tool.</p>
            <h1 style={{ textAlign: 'center' }}>The Ultimate Guide to Thumbnail Downloader YouTube</h1>
            <h2>I. Introduction</h2>
            <ol>
              <li>A brief explanation of the importance of YouTube thumbnails.</li>
              <li>Introduction to Thumbnail Downloader YouTube tools.</li>
              <li>Preview of what the blog will cover.</li>
			  <h2>II. Why Thumbnails Matter on YouTube</h2>
            <ol>
              <li>The Role of Thumbnails in Video Visibility.</li>
              <li>First Impressions Matter.</li>
              <li>Thumbnails Impact Click-Through Rates (CTR).</li>
			  <li>Thumbnails Impact Click-Through Rates (CTR).</li>
			  <li>Thumbnails Impact Click-Through Rates (CTR).</li>
			  <li>Thumbnails Impact Click-Through Rates (CTR).</li>
            </ol>
            {/* ...Rest of your provided HTML text... */}
            <h2>X. Conclusion</h2>
            <ul>
              <li>Recap of the importance of YouTube thumbnails</li>
              <li>The convenience of Thumbnail Downloader YouTube tools</li>
              <li>Encourage readers to start using these tools</li>
            </ul>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
