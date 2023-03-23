import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Output from "../components/Output";
import ClockLoader from "react-spinners/ClockLoader";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import axios from 'axios';



export default function Home() {
  const [imageData, setImageData] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const uploader = Uploader({ apiKey: process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT });

  const handleUploadComplete = async (files) => {
    if (!files || files.length === 0) {
      return;
    }

    setShowLoading(true);

    try {
      const fileUrls = files.map(x => x.fileUrl).join(',');
      const response = await axios.post(`/api/generate?imageUrl=${fileUrls}`);

      if (response.status === 200) {
        setTimeout(() => {
          setShowLoading(false)
        }, 5000);

        setImageData({
          altText: response.data,
          files: files[0].originalFile.fileUrl,
          success: true
        });
      }
    } catch (error) {
      console.error(error);
      setShowLoading(false)
    }
  };
  return (
    <>
      <Head>
        <title>ImageAlt</title>
        <meta
          name="google-site-verification"
          content="5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs"
        />
      </Head>
      <main>
        <Hero />
        <div className='max-w-6xl mx-auto px-4'>

          {showLoading ? (
            <div className="w-full py-28">
              <ClockLoader
                color="#ffffff"
                loading={showLoading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="text-gray-500 text-center pt-10 max-w-xs mx-auto">Please wait for 5-10 seconds for alternative text to be generated.</p>
            </div>
          ) : (
            <>

              <div className="py-16 pb-20 sm:pb-28 max-w-6xl ">
                <div className="flex items-center justify-center max-w-[250px] text-base sm:text-lg px-7 sm:px-10 py-4 text-white bg-blue-600 tracking-wide rounded-xl w-full font-medium hover:bg-blue-900 shadow-xl text-center mx-auto ">
                  <UploadButton uploader={uploader}
                    options={{ multi: true }}
                    onComplete={handleUploadComplete}>
                    {({ onClick }) =>
                      <button onClick={onClick}>
                        Upload a image...
                      </button>
                    }
                  </UploadButton>
                </div>
              </div>

              <Output data={imageData} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
