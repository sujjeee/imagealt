import Head from 'next/head'
import Hero from '@/components/Hero';
import Output from '@/components/Output';
import { useState } from 'react';


export default function Home() {
  const [imageData, setImageData] = useState({});

  const handleImageData = (data) => {
    setImageData(data);
  };


  return (
    <>
      <Head>
        <title>ImageAlt</title>
        <meta name="google-site-verification" content="5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs" />
      </Head>
      <main >

        <Hero onImageData={handleImageData} />
        <div className='max-w-6xl mx-auto px-4'>
          <Output data={imageData} />
        </div>
      </main>
    </>
  )
}
