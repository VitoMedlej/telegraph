import {Box, Container, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const Item = ({title,text,img,n}:{img:string,title:string,text:string,n:number}) => {
    return <Grid container sx={{mb:{xs:11,sm:8,md:0},py:{md:'2em',lg:0},width:'100%',justifyContent:{md:'space-between'},height:{lg:'700px'}}}>
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
                <Typography   component='h2' className='h2 clr2 '>
                    {title}
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:1.5}}
                    component='p'
                    
                    className='clr2 '>
          {text}
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger${n} `}>
            <Box 
            className={`relative animated-img${n} `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                maxHeight:'410px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
                <Box className={`absolute hider-${n}`} sx={{background:'white',height:'20%',top:0,width:'100%',maxWidth:'650px'}}>
    
                </Box>
                <img
                    src={img || "https://kota.co.uk/static/be60274f17826f2f328c276b8404f6bc/17f62/homepage-tribepad.webp"}
                    alt="Why Choose Us Image"
                    className="img br8"/>
            </Box>
        </Grid>
    </Grid>
}
const VerticalCarousel = () => {
useEffect(() => {

gsap.fromTo('.animated-img1',{opacity:0,y:'10px'},{y:'0%',opacity:1,scrollTrigger:{
    trigger:'.title-trigger1',
    start:'10% 50%',
}})
gsap.to('.hider-1',{height:'0%',scrollTrigger:{trigger:'.title-trigger1',start:'10% 50%'}})
gsap.fromTo('.nb-1 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-1',
    start:'top 50%',
}})


gsap.fromTo('.animated-img2',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger2',
    start:'10% 50%',
}})
gsap.to('.hider-2',{height:'0%',scrollTrigger:{trigger:'.title-trigger2',start:'10% 50%'}})

gsap.fromTo('.nb-2 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-2 ',
    start:'top 50%',
}})


gsap.fromTo('.animated-img3',{opacity:0,y:'10px'},{opacity:1,y:'0',ease:'ease-in',scrollTrigger:{
    trigger:'.title-trigger3',
    start:'10% 50%',
}})
gsap.to('.hider-3',{height:'0%',scrollTrigger:{trigger:'.title-trigger3',start:'10% 50%'}})

gsap.fromTo('.nb-3 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
stagger:.25,
scrollTrigger:{
    trigger:'.count-3',
    start:'top 50%',
}})

  
}, [])

    return (
        <Box>
            <Container sx={{width:'100%'}} maxWidth='xl'>

                <Item title={'All Budgets'} text={'We charge 20-40% less than other agencies and our plan options are super flexible and tailored to your unique needs.'} img={'https://cdn.dribbble.com/users/1240263/screenshots/11126045/media/e2d1d6296cbcf3f508e39f6774818576.png?compress=1&resize=800x600&vertical=top'} n={1}/>
                <Item title={'Impact and Effect'} text={'We create visually stunning, user-friendly User Interface that engage visitors and drive conversions and promote long-term customer loyalty.'} img={'https://ucarecdn.com/6feb5e16-04b6-4c91-8ddb-65de5f1ae4da/impact.png'} n={2}/>
                <Item title={'Quality and Speed'} text={'We create high performance websites and mobile apps that deliver a seamless user experience, driving success for your business.'} img={'https://searchengineland.com/wp-content/seloads/2022/08/Speed-and-the-power-of-page-experience-on-SEO.png'} n={3}/>
                {/* <Item n={2}/> */}
                {/* <Item n={3}/> */}

            </Container>
        </Box>
    )
}

export default VerticalCarousel