import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Free Thumbnail Downloader YouTube
        </h1>
        <p className="text-gray-600">
          Discover the easiest way to obtain high-quality YouTube video thumbnails with our Thumbnail Downloader. Quickly access and download YouTube video previews using our efficient Thumbnail Downloader YouTube tool.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Thumbnail images are essential for attracting viewers and improving your video's performance on YouTube. Use these high-quality thumbnails to enhance your content and increase engagement.
          </p>
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">The Ultimate Guide to Thumbnail Downloader YouTube</h2>
        <h3 className="text-xl font-semibold mb-2">I. Introduction</h3>
        <p className="mb-2">
          A brief explanation of the importance of YouTube thumbnails.
        </p>
        <p className="mb-2">Introduction to Thumbnail Downloader YouTube tools.</p>
        <p className="mb-4">Preview of what the blog will cover.</p>
        <h3 className="text-xl font-semibold mb-2">II. Why Thumbnails Matter on YouTube</h3>
        <p className="mb-2">
          Thumbnails are crucial on YouTube, and they play a vital role in attracting viewers' attention and encouraging them to click on your videos. When you use the right thumbnail, you can improve your video's visibility and overall performance on the platform.
        </p>
        <ol className="list-decimal pl-4 mb-4">
          <li className="mb-2">
            Grabbing Viewer Attention: Thumbnails are the first thing viewers see when browsing through YouTube. A compelling thumbnail can catch their eye and make them curious about your video's content.
          </li>
          <li className="mb-2">
            Visual Representation: Thumbnails offer a visual preview of your video's content. They help viewers quickly understand what the video is about, increasing the likelihood of attracting those interested in that topic.
          </li>
          <li className="mb-2">
            Click-Through Rate (CTR): CTR is a critical metric for YouTube's algorithm. Click-worthy thumbnails can significantly increase your video's CTR, signaling to YouTube that your content is engaging and relevant.
          </li>
          <li className="mb-2">
            Competitive Edge: On YouTube, you're competing with countless other videos for viewers' attention. A well-designed thumbnail sets your video apart and can make it stand out in search results and recommendations.
          </li>
          <li>
            Branding: Consistent thumbnail designs can help establish your channel's brand identity. Viewers will recognize your content more easily, leading to higher trust and loyalty.
          </li>
        </ol>
        <h3 className="text-xl font-semibold mb-2">III. Thumbnail Downloader YouTube: What Is It?</h3>
        <p className="mb-2">
          A "Thumbnail Downloader for YouTube" is a tool or service that allows users to retrieve or save the small images or pictures (thumbnails) associated with YouTube videos. These thumbnails serve as visual representations of the video's content and are often used for promotional purposes, including video previews and click-through enticement.
        </p>
        <p className="mb-4">
          Thumbnail downloaders are typically used by content creators, marketers, or individuals who need access to these thumbnails for various reasons, such as creating custom graphics, video reviews, or educational content. By downloading these thumbnails, users can create more visually appealing content and improve their video's SEO (Search Engine Optimization) by using eye-catching images to attract viewers.
        </p>
        <p className="mb-4">
          It's important to note that while using a Thumbnail Downloader for YouTube can be a useful tool for content creators and marketers, it's essential to respect copyright and YouTube's terms of service when using these downloaded thumbnails. Additionally, using these thumbnails should be done with the intent of enhancing the user experience and not for any deceptive or harmful purposes.
        </p>
        <h3 className="text-xl font-semibold mb-2">IV. How to Use a Thumbnail Downloader YouTube</h3>
        <p className="mb-2">
          Using a Thumbnail Downloader for YouTube is a straightforward process that can help enhance your video content while respecting SEO (Search Engine Optimization) guidelines. Here's a step-by-step guide:
        </p>
        <ol className="list-decimal pl-4 mb-4">
          <li className="mb-2">
            Choose a Reputable Thumbnail Downloader: Start by selecting a trustworthy thumbnail downloader tool or website. Ensure that it's a legitimate service that respects copyright and YouTube's terms of service.
          </li>
          <li className="mb-2">
            Find the YouTube Video URL: Go to the YouTube video for which you want to download the thumbnail. Copy the video's URL from your web browser's address bar.
          </li>
          <li className="mb-2">
            Access the Thumbnail Downloader: Open the thumbnail downloader tool or website in your web browser.
          </li>
          <li className="mb-2">
            Paste the Video URL: On the thumbnail downloader's interface, you should see a field where you can paste the YouTube video URL. Right-click in this field and select "Paste" or press Ctrl + V (Windows) or Command + V (Mac) to paste the URL.
          </li>
          <li className="mb-2">
            Generate or Download the Thumbnail: Once you've pasted the URL, the thumbnail downloader may provide an option to generate or download the thumbnail image. Click the appropriate button or link to initiate the process.
          </li>
          <li className="mb-4">
            Save the Thumbnail: After generating or downloading the thumbnail, right-click on the image and select "Save Image As" (or a similar option depending on your browser). Choose a location on your computer where you want to save the thumbnail and give it a meaningful file name.
          </li>
        </ol>
        <h3 className="text-xl font-semibold mb-2">V. Thumbnail Downloader YouTube Tools Comparison</h3>
        <p className="mb-4">
          Review of Popular Thumbnail Downloader Tools
        </p>
        <h3 className="text-xl font-semibold mb-2">VI. Ensuring Compliance and Best Practices</h3>
        <p className="mb-2">
          Thumbnail Usage Guidelines.
        </p>
        <p className="mb-4">
          Avoiding Copyright Infringement.
        </p>
        <h3 className="text-xl font-semibold mb-2">VII. Creative Uses of YouTube Thumbnails</h3>
        <p className="mb-2">
          Beyond Video Previews
        </p>
        <p className="mb-2">
          Social Media Marketing.
        </p>
        <p className="mb-2">
          Website and Blog Post Thumbnails.
        </p>
        <p className="mb-4">
          Thumbnail for Video Editing.
        </p>
        <h3 className="text-xl font-semibold mb-2">VIII. Troubleshooting Common Thumbnail Download Issues</h3>
        <p className="mb-2">
          Resolution and Quality Problems.
        </p>
        <p className="mb-4">
          Tool-Specific Issues.
        </p>
        <h3 className="text-xl font-semibold mb-2">IX. Frequently Asked Questions (FAQs)</h3>
        <ol className="list-decimal pl-4 mb-4">
          <li className="mb-2">
            What is a Thumbnail Downloader for YouTube, and why do I need it?
          </li>
          <li className="mb-2">
            Are Thumbnail Downloaders for YouTube legal to use?
          </li>
          <li className="mb-2">
            How do I find the URL of a YouTube video to download its thumbnail?
          </li>
          <li className="mb-2">
            Can I customize the quality of the downloaded thumbnail?
          </li>
          <li className="mb-2">
            Do I need any special software to use a Thumbnail Downloader YouTube tool?
          </li>
          <li className="mb-2">
            What are the recommended image dimensions and formats for YouTube thumbnails?
          </li>
          <li className="mb-2">
            Are there any restrictions on how I can use downloaded thumbnails?
          </li>
          <li className="mb-2">
            Can I download thumbnails from private YouTube videos?
          </li>
          <li className="mb-2">
            Are there any risks associated with using Thumbnail Downloaders?
          </li>
          <li>
            Do Thumbnail Downloaders work on mobile devices?
          </li>
        </ol>
        <h3 className="text-xl font-semibold mb-2">X. Conclusion</h3>
        <p className="mb-2">
          Recap of the importance of YouTube thumbnails
        </p>
        <p className="mb-2">
          The convenience of Thumbnail Downloader YouTube tools
        </p>
        <p className="mb-4">
          Encourage readers to start using these tools
        </p>
      </div>
    </div>
  );
};

export default Index;
