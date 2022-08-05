import React, { useState } from "react";
import axios from "axios";
import LinkInput from "./components/LinkInput";
import LinkPreviewCard from "./components/LinkPreviewCard";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import ExamplePreviews from "./components/ExamplePreviews";
import Footer from "./components/Footer";

const BACKEND_URL = "http://localhost:7781/url";
// const BACKEND_URL='https://link-glance.herokuapp.com/url'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (url = "") => {
    console.log("Fetching preview...");
    setLoading(true);
    setData(null);
    try {
      const response = await axios.post(BACKEND_URL, { url });
      // console.log(response);
      if (!response.data.success) {
        alert(response.data.msg);
        return;
      }
      if (response.data.preview) {
        const _data = response.data.preview;
        setData({ ..._data, url });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 0, margin: 0, boxSizing: "border-box" }}>
      <Navbar />
      <div className="container">
        <LinkInput handleSubmit={handleSubmit} loading={loading} />
        {loading && <Loading />}
        <div className="row my-3">
          {data !== null && <LinkPreviewCard data={data} />}
        </div>
        <ExamplePreviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
