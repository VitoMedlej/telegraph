import BlogSections from '@/Components/Home/BlogSections'
// import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
// import Plans from '@/Components/Home/Plans'
// import Portfolio from '@/Components/Home/Portfolio'
// import Services from '@/Components/Home/Services'
// import Teaser from '@/Components/Home/Teaser'
// import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'



const test = [{
 
      P :  `<p>

      this is a text with a link to <a href='https://google.com' target='_blank'>google</a>
      </p>`
  
}]
export default function Index() {
  const router = useRouter();

  
  return (
    <>
      <Head>
        <title>OnBeirut Software Development Agency | Developers In Lebanon </title>
        <meta name="description" content={`
     Looking for a top software development agency in Lebanon? Look no further than OnBeirut. Our skilled developers deliver high-quality web and mobile solutions.
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/3d4abdb1-ac77-45ea-9fc2-30f85a0e1b06/obiconv3.JPG" />
      </Head>
      <main className="bg4">
  <Navbar/>


    {/* <Grid sx={{pt:4,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9} item>
                    <Container  className='bg3 auto' sx={{py:2,border:'1px solid',height:'100%'}}>
                        <Box>
                            <Typography component='h1' sx={{py:2,fontWeight:800,fontSize:{xs:'2em'}}}>
                            Start a Blog in 5 Easy Steps (do this before monetizing it)
                            </Typography>
                        </Box>
                        <Box sx={{borderBottom:'1px solid'}}>
                        Jan 20, 2023 • 0 comments
                        </Box>
                        <Box sx={{my:{lg:5},maxWidth:'md'}}>
                            <img src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post Main Image" className="img" />
                        </Box>
                        <Box>
                            <Typography className='blog-p' component='p'>
                            Everyone can make money blogging, everyone, including you. So get that doubt and fear out of your heart and read till the end, it is worth it. Now let's get started.
                            </Typography>

                                {test.map((text)  =>{
                                  console.log('P: ', text);
                                      return <text.P/>
                                })}
                        </Box>
                        <Box sx={{p:1.5}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>

                                            Step 1 - Get your own blog website

                                            </Link>
                                            </li>
                                            <li>
                                            <Link className='clr4' href='/'>
                                            Step 2 - Pick your blog name and niche
                                            </Link>
                                            </li>
                                    
                                    </ul>
                        </Box>
                        <Box >
                            <Typography component='h1' className='blog-h1' >
                            Step 1 - Get your own blog website
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 1 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                            <Typography component='h2' className='blog-h2' >
                            Invest in link building
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 1 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                        </Box>
                    </Container>
                    
            </Grid>
            <Grid xs={12} md={4} lg={3} item  sx={{maxWidth:'sm'}}>
            <Grid>
                
            </Grid>
            <Grid className='auto'>
            <Container className='bg3' disableGutters sx={{py:2,px:1,mb:1}}>
              <Box className='flex row align-center gap2' sx={{mb:.25,width:'100%'}}>
                <Box sx={{width:'50px'}}>
                <img src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:60/h:60/q:90/dpr:1.1/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/09/john-h-1.png" alt="" className="img rounded" />
                </Box>
                <Typography sx={{fontWeight:'600'}}>
                Vito Medlej
                </Typography>
              </Box>
              <Box>
                <Typography className='clr2' sx={{fontSize:'.9em'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita nam eum id voluptates dicta.
                </Typography>
              </Box>
            </Container>
            <Container className='bg3' sx={{}}>
            <Typography component='h2' className='blog-h2' >
                            Invest in link building:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>
                                            Step 1 - Get your own blog website
                                            </Link>
                                            </li>
                                    </ul>
                        </Box>
            </Container>
                
            </Grid>
            </Grid>
        </Grid> */}

        Under development...

      </main>
    </>
  )
}
