import React, { useEffect, useState } from "react";
import { getLinkPreview } from "link-preview-js";
import LinkInput from "./components/LinkInput";
import LinkPreviewCard from "./components/LinkPreviewCard";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (text = "") => {
    console.log("Fetching preview...");
    setLoading(true);
    try {
      const proxy = "https://cors-anywhere.herokuapp.com/"; // we using this as we are not allowed to fetch the data from api with localhost.
      const _data = await getLinkPreview(
        // proxy +
        text || "https://www.youtube.com/watch?v=MejbOFk7H6c",
        {
          imagesPropertyType: "og", // fetches only open-graph images
          headers: {
            "User-Agent": "googlebot", // fetches with googlebot crawler user agent
            "Accept-Language": "en-US",
            // Origin: "http://localhost:3000",

            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
          // timeout: 5000,
        }
      );

      // const res = await fetch(
      //   // proxy +
      //   text || "https://www.youtube.com/watch?v=MejbOFk7H6c",
      //   {
      //     imagesPropertyType: "og", // fetches only open-graph images
      //     headers: new Headers({
      //       "User-Agent": "googlebot", // fetches with googlebot crawler user agent
      //       "Accept-Language": "en-US",
      //       // Origin: "http://localhost:3000",

      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //       "Access-Control-Allow-Headers": "Content-Type",
      //     }),
      //     // timeout: 5000,
      //   }
      // );
      // const _data = await res.json();
      console.log(_data);
      // setData(_data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  // const data = {
  //   url: "https://www.youtube.com/watch?v=MejbOFk7H6c",
  //   title: "OK Go - Needing/Getting - Official Video - YouTube",
  //   siteName: "YouTube",
  //   description:
  //     "Buy the video on iTunes: https://itunes.apple.com/us/album/needing-getting-bundle-ep/id508124847 See more about the guitars at: http://www.gretschguitars.com...",
  //   images: ["https://i.ytimg.com/vi/MejbOFk7H6c/maxresdefault.jpg"],
  //   mediaType: "video.other",
  //   contentType: "text/html; charset=utf-8",
  //   videos: [],
  //   favicons: [
  //     "https://www.youtube.com/yts/img/favicon_32-vflOogEID.png",
  //     "https://www.youtube.com/yts/img/favicon_48-vflVjB_Qk.png",
  //     "https://www.youtube.com/yts/img/favicon_96-vflW9Ec0w.png",
  //     "https://www.youtube.com/yts/img/favicon_144-vfliLAfaB.png",
  //     "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
  //   ],
  // };

  return (
    <div style={{ padding: 0, margin: 0, boxSizing: "border-box" }}>
      <Navbar />
      <div className="container">
        <LinkInput handleSubmit={handleSubmit} loading={loading} />
        {loading && <Loading />}
        <div className="row">
          {data !== null && <LinkPreviewCard data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
