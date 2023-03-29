import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const Hero = () => {
  return (
    <Box className='' sx={{width:'100%',minHeight:'600px'}}>
        <Grid container maxWidth='xl' className='auto' sx={{color:'white'}}>
                <Grid item md={12} sx={{height:'100%',mt:{xs:4,sm:5}}} className='flex center col'>
                  <Container >

                    <Typography  sx={{lineHeight:'1.1em',maxWidth:'md',fontSize:{xs:'2.75em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                        From OnBeirut, To the World
                    </Typography>
                    <Typography sx={{maxWidth:'600px',my:{xs:2.5,md:2.5},fontSize:{xs:'.89em'}}} className='clr3' component='h4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis molestias fugit animi incidunt dolorum, optio quam eos facere error illum rerum deserunt sed minus.
                    </Typography>
                    <Box>
                        {/* <Link href='/'>Contact</Link> */}
                        <Btn blur sx={{mt:1}}>
                            Home
                        </Btn>
                    </Box>
                    </Container>
                    <Box sx={{display:{xs:'none',md:'flex'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/5c2b213c-8e9e-4090-b37d-5ae49a5a3eaf/ColourfulMinimalBrainstormRoadmapMindMap1.png" alt="" className="img" />
                    </Box>
                    <Box sx={{display:{xs:'flex',md:'none'}}} className='hero-img absolute'>
                        <img src="https://ucarecdn.com/1320e76b-8092-4a85-b4b3-ece1972cd17e/ColourfulMinimalBrainstormRoadmapMindMap3.png" alt="" className="img" />
                    </Box>

                    
                </Grid>
                {/* <Grid item xs={12}sm={8} className='auto' md={5}>
                    <img src="https://ucarecdn.com/b6687d6c-842c-42ef-8a44-bba5cbb501ce/earth3dglobe3dcomputergraphics3dmodelingearthpng9ddcc7ca59ea13ff69a2a4dfa7717621.png" className='img' alt="" />
                </Grid> */}
        </Grid>
    </Box>
  )
}

export default Hero