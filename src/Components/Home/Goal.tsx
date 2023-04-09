import {Container, Box, Grid, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const Goal = () => {
    return (
        <Box sx={{mt:{xs:4}}}>
            <Grid
                container
                className='flex auto'
                sx={{
                maxWidth: 'xl',
                flexDirection: {
                    xs: 'column-reverse',
                    sm: 'row'
                }
            }}>
                <Grid item xs={12} sm={7} md={6}>
                    <Container
                        sx={{
                        width: {
                            xs: '99%',
                            sm: '100%',
                            lg: '80%'
                        },
                        pb: {
                            xs: 2,
                            sm: 0
                        },
                        height: '100%'
                    }}
                        className='center flex auto align- col'>

                        <Typography component='h2' className='h2 clr2 '>
                        Your One-Stop Web Development Partner
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5
                        }}
                            className='clr2 '>
                            Our goal is to empower small and medium-sized businesses by providing affordable, high-quality web development services.
                            We understand the importance of a strong online presence in today's digital world, and we're committed to helping you achieve it without costing you a fortune. 
                            Experience the perfect balance of quality and affordability with OnBeirut – let us be your partner in online success.
                            </Typography>
                        <Btn
                            dark
                            sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            Navigate
                        </Btn>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Box className='goal-bg'>

                        <img
                            src="https://www.eight25media.com/wp-content/uploads/2021/02/group-46@-1.png"
                            alt=""
                            className="contain img"/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Goal