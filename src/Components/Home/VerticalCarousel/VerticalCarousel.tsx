import {Box, Container, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const Item = ({n}:{n:number}) => {
    return <Grid container sx={{mb:{xs:11,sm:8,md:0},height:{lg:'700px'}}}>
        <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-${n}`}
            sx={{
                width:'99%',
                maxWidth: '530px'
            }}>
                <Typography component='h4' sx={{fontSize:'1em',pr:.65,fontWeight:'600'}} className={` clr4 count-${n}  `}>
                    0{n}
                </Typography>
                <Box className='flex align- gap ' >
                <Typography component='h2' className='h2 clr2 '>
                    Making brands a damn site better
                </Typography>
                </Box>
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
            </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger${n} `}>
            <Box 
            className={`animated-img${n} `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                maxWidth:'650px',
                maxHeight:'410px',
                height:'100%',
                margin:{xs:'1em 0',md:'0 auto'},
                borderRadius: '8px'
            }}>
                <img
                    src="https://kota.co.uk/static/be60274f17826f2f328c276b8404f6bc/17f62/homepage-tribepad.webp"
                    alt="Image"
                    className="img br8"/>
            </Box>
        </Grid>
    </Grid>
}
const VerticalCarousel = () => {
useEffect(() => {

gsap.fromTo('.animated-img1',{opacity:0,y:'20px'},{y:'0%',opacity:1,scrollTrigger:{
    trigger:'.title-trigger1',
    start:'10% 50%',
    // start: 'top top',
    // end: 'bottom top',
    // scrub:true,
    // pin: true,
    // markers:true
}})
gsap.fromTo('.nb-1 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-1',
    start:'top 50%',
}})


gsap.fromTo('.animated-img2',{opacity:0,y:'15px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger2',
    start:'10% 50%',
}})
gsap.fromTo('.nb-2 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-2 ',
    start:'top 50%',
}})


gsap.fromTo('.animated-img3',{opacity:0,y:'15px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger3',
    start:'10% 50%',
}})
gsap.fromTo('.nb-3 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-3',
    start:'top 50%',
}})

  
}, [])

    return (
        <Box>
            <Container maxWidth='xl'>

                <Item n={1}/>
                <Item n={2}/>
                <Item n={3}/>

            </Container>
        </Box>
    )
}

export default VerticalCarousel