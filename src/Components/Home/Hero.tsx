import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box className='grad' sx={{width:'100%',minHeight:'600px'}}>
        <Grid container sx={{color:'white',px:{xs:1,sm:2}}}>
                <Grid item md={7} sx={{height:'100%',mt:{xs:2,sm:3,md:5}}} className='flex center col'>
                    <Typography  sx={{fontSize:{xs:'2.5em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                        From OnBeirut, To the World
                    </Typography>
                    <Typography sx={{maxWidth:'600px'}} component='h4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis molestias fugit animi incidunt dolorum, optio quam eos facere error illum rerum deserunt sed minus.
                    </Typography>
                    <Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={12}sm={8} className='auto' md={5}>
                    <img src="https://ucarecdn.com/b6687d6c-842c-42ef-8a44-bba5cbb501ce/earth3dglobe3dcomputergraphics3dmodelingearthpng9ddcc7ca59ea13ff69a2a4dfa7717621.png" className='img' alt="" />
                </Grid>
        </Grid>
    </Box>
  )
}

export default Hero