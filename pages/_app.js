import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Free Thumbnail Downloader Youtube - High-Quality Images"
        description="YouTube thumbnail downloader tool, download high-quality thumbnail images. Elevate your content with ease and optimize your YouTube strategy today."
        canonical="https://thumbnaildownloaderyoutube.com"
        openGraph={{
          url: "https://thumbnaildownloaderyoutube.com",
          title: "Free Thumbnail Downloader Youtube",
          description: "YouTube thumbnail downloader tool, download high-quality thumbnail images. Elevate your content with ease and optimize your YouTube strategy today.",
          site_name: "Free Thumbnail Downloader Youtube",
        }}
      />
      <Component {...pageProps} />
      {/* Google Analytics Code */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYYMQMKS6F"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

      gtag('config', 'G-KYYMQMKS6F');
     </script>
    </Fragment>
  );
}

export default MyApp;
