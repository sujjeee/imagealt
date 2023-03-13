import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTIC}`} />

      <Script
        strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTIC}');
        `}

      </Script>
      <div className="flex flex-col min-h-screen">
        <header className='border-b border-[#333333] sticky top-0  backdrop-blur-3xl z-50'>
          <Navbar />
        </header>
        <Component {...pageProps} />
        <footer className='border-t border-[#333333] '>
          <Footer />
        </footer>
      </div>
    </>
  )
}
