import Footer from '@/Footer/Footer'
import Navbar from '@/Navbar/Navbar'
import '@/styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
