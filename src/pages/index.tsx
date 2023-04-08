import BlogSections from '@/Components/Home/BlogSections'
import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
import Plans from '@/Components/Home/Plans'
import Portfolio from '@/Components/Home/Portfolio'
import Services from '@/Components/Home/Services'
import Teaser from '@/Components/Home/Teaser'
import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
  <Navbar/>
        <Hero/>
        <Goal/>
        <Teaser/>
        <VerticalCarousel/>
        <Services/>
        <Portfolio/>
        <Plans/>
        <BlogSections/>
      </main>
    </>
  )
}
