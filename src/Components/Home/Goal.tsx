import {Container, Box, Grid, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const Goal = () => {
    return (
        <Box>
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
                            Making brands a damn site better
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5
                        }}
                            className='clr2 '>
                            Let’s face it, first impressions matter. Your website’s an opportunity to wow
                            your audience, so why waste it with bad design? Because brands win new fans when
                            they’re brave enough to go beyond their creative comfort zone.
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