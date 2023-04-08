import Footer from '@/Footer/Footer'
import Navbar from '@/Navbar/Navbar'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  <Footer/>
  </>
}
