import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const Services = () => {
  return (
    <Box className='bg '>
        <Grid container className='flex center items-center align-center auto'  maxWidth='xl' sx={{height:'100%',minHeight:'600px'}} >
             <Grid item xs={12} sm={7}>
                    <Container sx={{mt:{xs:4,sm:0},textAlign:{xs:'center',sm:'left'},color:'white'}}>

                    <Typography sx={{fontWeight:"700",fontSize:{xs:'2em',sm:'3em'}}}>
                    Website Design & Development,
                    Software development.
                    </Typography>
                    <Btn blur sx={{my:2}}>
                      <Typography sx={{fontSize:'.85em'}}>
                      Check Our Services
                      </Typography>
                    </Btn>
                    </Container>

                </Grid>       
                <Grid item xs={12} sm={5}>
                    <Box sx={{maxWidth:'550px'}}>
                      <img src="https://i.pinimg.com/736x/36/12/9a/36129a92cce2616d027d0a427a0c95be.jpg" alt="" className="img" />
                    </Box>
                </Grid>       
        </Grid>
    </Box>
  )
}

export default Services