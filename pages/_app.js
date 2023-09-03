import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Free Thumbnail Downloader Youtube - High-Quality and 4k Thumbnail Images"
        description="Discover thumbnail downloader YouTube tool: Access high-quality thumbnails in various resolutions and discover inspiration from fellow creators' designs. Simply paste your video URL, hit 'Download Thumbnails,' and instantly enhance your content with eye-catching visuals. Start optimizing your YouTube presence today"
        canonical="https://thumbnaildownloaderyoutube.com"
        openGraph={{
          url: "https://thumbnaildownloaderyoutube.com",
          title: "Free Thumbnail Downloader Youtube",
          description: "Discover thumbnail downloader YouTube tool: Access high-quality thumbnails in various resolutions and discover inspiration from fellow creators' designs. Simply paste your video URL, hit 'Download Thumbnails,' and instantly enhance your content with eye-catching visuals. Start optimizing your YouTube presence today",
          site_name: "Free Thumbnail Downloader Youtube",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
