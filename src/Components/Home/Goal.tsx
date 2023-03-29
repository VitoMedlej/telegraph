import {Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Goal = () => {
  return (
    <Box>
        <Grid container className='flex ' sx={{flexDirection:{xs:'column-reverse',sm:'row'}}}>
                <Grid item xs={12} sm={6}>
                    <Box className='goal-bg'>

                                  <img src="https://images.pexels.com/photos/8636592/pexels-photo-8636592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img" />
                    </Box>
                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Container sx={{pb:{xs:2,sm:0},height:'100%'}} className='center flex auto align-center col'>

            <Typography component='h2' className='h2 clr text-center' sx={{width:{xs:'100%',sm:'80%'}}}>
                Some good title and shit blah blah
            </Typography>
            <Typography component='p' sx={{mt:1.5,width:{xs:'99%',sm:'80%'}}} className='clr2 text-center'>
                Some good title and Some good title and shit 
                Some good title and shit
            </Typography>
                                    </Container>
                </Grid>
        </Grid>
    </Box>
  )
}

export default Goal