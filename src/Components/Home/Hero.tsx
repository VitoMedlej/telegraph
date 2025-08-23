import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import UcImage from '../UcImage/UcImage';

const Hero = ({blog,imgsm,imgmd,title,desc}:{imgsm?:string,blog?:boolean,imgmd?:string,title?:string,desc?:string}) => {

  return (
    <Box sx={{py:4,width:'100%'}}>
        <Grid  container maxWidth='xl' className='auto' sx={{my:5,color:'white'}}>
                <Grid item md={12} sx={{height:'100%'}} className='flex center col'>
                  <Container className='flex col center items-center'  sx={{
                    alignItems: 'center !important',
                    display: 'flex',
                    pt:{xs:4,sm:0}}}>
                    <Typography  className='hero-t1  auto text-center' sx={{lineHeight:'1.1em',maxWidth:'md',fontSize:{xs:'2.75em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                    أخبار منوعة من لبنان والعالم
                    </Typography>
                    </Container>
                    <Box sx={{height:'400px',display:{xs:'flex'}}} className='hero-img absolute'>
                        <img src={imgsm ? imgsm : "https://ucarecdn.com/b0669374-d6f8-4508-abe4-73b5382c16a8/ColourfulMinimalBrainstormRoadmapMindMap3.jpeg"} alt="Main Section Background Image Small Devices" className="img" />
                    </Box>
                </Grid>
        </Grid>
    </Box>
  )
}

export default Hero