import BlogSections from '@/Components/Home/BlogSections'
// import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
// import Plans from '@/Components/Home/Plans'
// import Portfolio from '@/Components/Home/Portfolio'
// import Services from '@/Components/Home/Services'
// import Teaser from '@/Components/Home/Teaser'
// import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import { Box } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  
  return (
    <>
      <Head>
        <title>OnBeirut Web Dev Agency | Software Engineering In Lebanon </title>
        <meta name="description" content={`
        Expert web design & development services for a strong online presence. Get responsive, SEO-friendly sites & increase conversions. Start now
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/3d4abdb1-ac77-45ea-9fc2-30f85a0e1b06/obiconv3.JPG" />
      </Head>
      <main>
        <Box sx={{mb:{xs:5,sm:6,md:9}}} className='hero-img' >

  <Navbar/>
        <Hero blog={true}  title={'Expand Your Knowledge'} imgmd={`https://ucarecdn.com/4a88fc30-1397-43dd-9ed9-2949b788d7b6/Capture.JPG`}/>
        </Box>
        
        <BlogSections/>
      </main>
    </>
  )
}
