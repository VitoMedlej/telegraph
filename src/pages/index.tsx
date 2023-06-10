import BlogSections from '@/Components/Home/BlogSections'
import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
import Plans from '@/Components/Home/Plans'
import Portfolio from '@/Components/Home/Portfolio'
import Services from '@/Components/Home/Services'
import Teaser from '@/Components/Home/Teaser'
import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import { Box } from '@mui/material'
import Head from 'next/head'
import gsap from 'gsap';
import { useRouter } from 'next/router'
import {useEffect} from 'react';
import Testimonial from '@/Components/Home/Testimonial'

export default function Home() {
  const router = useRouter();
  const {scrollTo} = router.query
  useEffect(() => {
    
    if (scrollTo) {
        gsap.to(window, {duration: 2,delay:.4, scrollTo : `${scrollTo}` });
        
    }
    
  }, [scrollTo])
  
  return (
    <>
      <Head>
      <title>Empowering Businesses with Tech | OnBeirut Software Engineering Agency</title>
        <meta name="description" content={`
At OnBeirut, we empower businesses with custom web and mobile development solutions. Our expert software engineers work with you to build innovative, user-friendly applications that drive growth and streamline operations. Contact us today to bring your business to the next level.
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/3d4abdb1-ac77-45ea-9fc2-30f85a0e1b06/obiconv3.JPG" />
      </Head>
      <main>
        <Box className='hero-img' >

  <Navbar/>
        <Hero/>
        </Box>
        <Goal/>
        <Teaser/>
        <VerticalCarousel/>
        <Services/>
        <Portfolio/>
        <Plans/>
        <Testimonial/>
        <BlogSections/>
      </main>
    </>
  )
}
