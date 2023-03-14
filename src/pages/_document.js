import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  let description = "Upload any image and generate alt text in seconds.";
  let ogimage = "https://imagealt.vercel.app/imagealt.png";
  let sitename = "ImageAlt";
  let title = "ImageAlt - Image to Text";
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />

        <meta property="og:site_name" content={sitename} />
        <meta property="og:image" content={ogimage} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogimage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
