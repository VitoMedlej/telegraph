import Footer from '@/Footer/Footer'
// import Navbar from '@/Navbar/Navbar'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import Script from 'next/script'


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
export default function App({ Component, pageProps }: AppProps) {
  return <>
{/* <!-- Google tag (gtag.js) --> */}
<Script strategy="lazyOnload"   async src="https://www.googletagmanager.com/gtag/js?id=G-6FMZ4XFZ6X"></Script>
<Script strategy="lazyOnload"
id="google-analytics"
>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6FMZ4XFZ6X');
  `}
</Script>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  <Footer/>
  </>
}
