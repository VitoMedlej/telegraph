import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';


const Teaser = () => {
  useEffect(() => {
    gsap.fromTo('.teaser-h1',{opacity:0,y:'15px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
      trigger:'.teaser-h1',
      start:'10% 50%',
  }})
  }, [])
  
  return (
    <Container maxWidth='xl' sx={{width:{lg:'80%'},py:{xs:'6.5em',md:"7.9em"}}}>
        <Typography  sx={{fontSize:{xs:'2em',sm:'2.5em',md:'2.8em'},fontWeight:"700"}} className='clr2 teaser-h1' component='h1'>
        {/* Our digital agency creates unique websites with three key things in mind: */}
        Our creative agency is dedicated to developing one-of-a-kind solution while keeping three things in mind;
        </Typography>
        </Container>
  )
}

export default Teaser