import {Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

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
                                    <Container sx={{
                                        width:{xs:'99%',sm:'80%'},
                                        pb:{xs:2,sm:0},height:'100%'}} className='center flex auto align- col'>

            <Typography component='h2' className='h2 clr2 ' >
            Making brands a damn site better
            </Typography>
            <Typography component='p' sx={{mt:1.5}} className='clr2 '>
            Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.
            </Typography>
            <Btn dark sx={{color:'#0D2068',borderColor:'#0D2068',width:'fit-content',mt:2}}>

                Navigate
            </Btn>
                                    </Container>
                </Grid>
        </Grid>
    </Box>
  )
}

export default Goal