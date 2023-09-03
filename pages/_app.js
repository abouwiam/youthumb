import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Free Thumbnail Downloader Youtube"
        description="Discover Thumbnail Downloader YouTube – the simple solution for grabbing top-notch YouTube video thumbnails at no cost. With our easy-to-use tool, you can download thumbnails in various qualities. Just paste the video thumbnail URL in the box below, click, and Get a Thumbnail Image. Elevate your content with stunning visuals today!"
        canonical="https://thumbnaildownloaderyoutube.com"
        openGraph={{
          url: "https://thumbnaildownloaderyoutube.com",
          title: "Free Thumbnail Downloader Youtube",
          description: "Discover Thumbnail Downloader YouTube – the simple solution for grabbing top-notch YouTube video thumbnails at no cost. With our easy-to-use tool, you can download thumbnails in various qualities. Just paste the video thumbnail URL in the box below, click, and Get a Thumbnail Image. Elevate your content with stunning visuals today!",
          site_name: "Free Thumbnail Downloader Youtube",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
