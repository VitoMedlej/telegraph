import {Container, Box, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import Btn from '../Btn/Btn'
import gsap from 'gsap';
import Link from 'next/link';



const Goal = () => {
    useEffect(() => {
        gsap.to('.goal-t1',{opacity:1,y:0,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
        gsap.to('.goal-t2',{opacity:1,y:0,delay:.15,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
        gsap.to('.goal-img',{opacity:1,y:0,delay:.35,duration:1,scrollTrigger:{trigger:'.goal-img',start:'top 50%'}})
        gsap.to('.goal-btn',{opacity:1,y:0,delay:.35,scrollTrigger:{trigger:'.goal-t1',start:'top 50%'}})
      }, [])
    return (
        <Box sx={{mt:8}}>
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

                        <Typography  sx={{mt:{xs:2,sm:0}}} component='h1' className='h2 clr2 goal-t1 hid '>
                        Your One-Stop Software Development Partner
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5
                        }}
                            className='clr2 goal-t2 hid '>

Our goal is to empower businesses by providing affordable, high-quality web and mobile apps development services.
                            We&apos;re committed to helping you achieve online presence without costing you a fortune. 
                            Experience the perfect balance of quality and affordability with OnBeirut – let us be your partner in online success.                                
                            {/* Our goal is to empower small and medium-sized businesses by providing affordable, high-quality web development services.
                            We understand the importance of a strong online presence in today&apos;s digital world, and we&apos;re committed to helping you achieve it without costing you a fortune. 
                            Experience the perfect balance of quality and affordability with OnBeirut – let us be your partner in online success. */}
                            </Typography>
            <Link href='/services' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            What We Offer
                        </Btn>
                            </Link>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Box className='goal-bg goal-img hid'>

                        <img
                            src="https://cdn.dribbble.com/userupload/4395742/file/original-a42b4c3859b1aa2770c49139fd8b97fb.png?compress=1&resize=768x768"
                            alt="Image List of Website designs"
                            className="contain img"/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Goal