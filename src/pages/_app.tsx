import Footer from '@/Footer/Footer'
// import Navbar from '@/Navbar/Navbar'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import Script from 'next/script'
import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
export default function App({ Component, pageProps }: AppProps) {
  return <>
{/* <!-- Google tag (gtag.js) --> */}
<Script strategy="lazyOnload"   async src="https://www.googletagmanager.com/gtag/js?id=G-3FLXJPDH9B"></Script>
<Script strategy="lazyOnload"
id="google-analytics"
>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3FLXJPDH9B');
  `}
</Script>
 
  <Component {...pageProps} />
  <Footer/>
  </>
}
