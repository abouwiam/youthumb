import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-KYYMQMKS6F'); // Replace with your actual Google Analytics tracking ID
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
