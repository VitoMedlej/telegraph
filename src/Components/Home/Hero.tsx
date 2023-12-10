import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Btn from '../Btn/Btn'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import gsap from 'gsap';
import Link from 'next/link';

const Hero = ({blog,imgsm,imgmd,title,desc}:{imgsm?:string,blog?:boolean,imgmd?:string,title?:string,desc?:string}) => {

  useEffect(() => {
    gsap.to('.hero-t1',{opacity:1,y:0,delay:.85})
    gsap.to('.hero-t2',{opacity:1,y:0,delay:1.1})
    gsap.to('.hero-btn',{opacity:1,y:0,delay:1.35,stagger:.25})
    gsap.to('.hero-trust',{opacity:1,y:0,delay:1.55})
  }, [])
  
  return (
    <Box sx={{py:4,width:'100%'}}>
        <Grid  container maxWidth='xl' className='auto' sx={{my:5,color:'white'}}>
                <Grid item md={12} sx={{height:'100%'}} className='flex center col'>
                  <Container sx={{pt:{xs:4,sm:0}}}>
                    <Typography  className='hero-t1 hid' sx={{lineHeight:'1.1em',maxWidth:'md',fontSize:{xs:'2.75em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                    {title ? title : 'Grow Better With OnBeirut'}
                    </Typography>
                    <Typography className=' hero-t2 clr3 hid' sx={{maxWidth:'600px',my:{xs:2.5,md:2.5},fontSize:{xs:'.89em'}}} component='h4'>
                    {desc ? desc : 'We specialize in crafting stunning, responsive, budget-friendly web & mobile apps that fuel your growth and enhances your digital presence.'}
                    </Typography>

                    <Box sx={{py:2}}>
                        {/* <Link href='/'>Contact</Link> */}
                        <Link className='decor-none' href={blog ? '#latest':'/services'}>
                        <Btn  blur  sx={{px:{xs:1,sm:3}}} className='hid hero-btn'>
                      {blog ? 'Latest Articles' :  'Our Services'}
                        </Btn>
                        </Link>
                        <Link href='/contact' className='decor-none'>
                        <Btn className='hero-btn hid' sx={{mx:1,border:'none !important'}}>
                         Contact Us
                        </Btn>
                        </Link>
                      
                            <Typography sx={{maxWidth:'600px',my:{xs:2.5,md:2.5},gap:.5,fontWeight:300,fontSize:{xs:'.75em'}}} className='clr3 flex hero-trust hid align-center' component='h4'>
                            100% of our clients trust us
                            <VscWorkspaceTrusted/>
                    </Typography>
                    </Box>
                    </Container>
                    <Box sx={{height:'550px',display:{xs:'none',xl:'flex'}}} className='hero-img absolute'>
                        <img src={imgmd ? imgmd : "https://ucarecdn.com/8a7cbabd-31c5-4837-b5cf-651ef9ecec49/-/resize/2200x650/full.jpeg"} alt="Main Section Background Image Large Devices" className="img" />
                    </Box>
                    <Box sx={{height:'550px',display:{xs:'none',md:'flex'}}} className='hero-img absolute'>
                        <img src={imgmd ? imgmd : "https://ucarecdn.com/8a7cbabd-31c5-4837-b5cf-651ef9ecec49/-/resize/1200x550/full.jpeg"} alt="Main Section Background Image Large Devices" className="img" />
                    </Box>
                    <Box sx={{height:'600px',display:{xs:'flex',md:'none'}}} className='hero-img absolute'>
                        <img src={imgsm ? imgsm : "https://ucarecdn.com/b0669374-d6f8-4508-abe4-73b5382c16a8/ColourfulMinimalBrainstormRoadmapMindMap3.jpeg"} alt="Main Section Background Image Small Devices" className="img" />
                    </Box>
{/* 
                    <Box sx={{display:{xs:'none',md:'flex'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/5c2b213c-8e9e-4090-b37d-5ae49a5a3eaf/ColourfulMinimalBrainstormRoadmapMindMap1.png" alt="" className="img" />
                    </Box>
                    <Box sx={{display:{xs:'flex',md:'none'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/a2c2ac61-6896-4184-990f-97466cf8551e/Capture.webp" alt="" className="img" />
                    </Box> */}

                    
                </Grid>
                {/* <Grid item xs={12}sm={8} className='auto' md={5}>
                    <img src="https://ucarecdn.com/b6687d6c-842c-42ef-8a44-bba5cbb501ce/earth3dglobe3dcomputergraphics3dmodelingearthpng9ddcc7ca59ea13ff69a2a4dfa7717621.png" className='img' alt="" />
                </Grid> */}
        </Grid>
    </Box>
  )
}

export default Hero