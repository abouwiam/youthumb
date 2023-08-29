import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Thumbnail Downloader Youtube"
        description="Download high-quality and 4k thumbnails from YouTube videos Online."
        canonical="https://thumbnaildownloaderyoutube.com"
        openGraph={{
          url: "https://thumbnaildownloaderyoutube.com",
          title: "Thumbnail Downloader Youtube",
          description: "Download high-quality and 4k thumbnails from YouTube videos Online.",
          site_name: "Thumbnail Downloader Youtube",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
