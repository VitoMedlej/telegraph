import Btn from '@/Components/Btn/Btn'
import Navbar from '@/Navbar/Navbar'
import { Grid, Box, Link, Typography } from '@mui/material'
import Head  from 'next/head'
import React, { useEffect } from 'react'
import gsap from 'gsap';


const Services = () => {
    useEffect(() => {
        gsap.to('.hero-t1',{opacity:1,y:0,delay:.85})
        gsap.to('.hero-t2',{opacity:1,y:0,delay:1.1})
        gsap.to('.hero-btn',{opacity:1,y:0,delay:1.35,stagger:.25})
        gsap.to('.hero-trust',{opacity:1,y:0,delay:1.55})
      }, [])
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
        gsap.to('.hid',{opacity:1,scrollTrigger:{trigger:'.title-trigger3',start:'10% 50%'}})
        
        gsap.fromTo('.nb-3 > *',{opacity:0,y:'10px'},{opacity:1,y:'0',
        stagger:.25,
        scrollTrigger:{
            trigger:'.count-3',
            start:'top 50%',
        }})
        
          
        }, [])
  return (
    <>
    <Head>
    <title>Services Page | E-commerce - Business Branding - Mobile Apps</title>
    <meta name="description" content="Discover the comprehensive range of software engineering services offered by NewsTelegraph. From web development to mobile app design, our top-notch team of experts is dedicated to delivering high-quality solutions that align with your business goals. Explore our services today and learn how we can help take your digital innovation to the next level" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://ucarecdn.com/d61bbd32-7e00-4c97-ab6e-830a55d2c430/426298383_862973212505626_547961837728015954_n.jpg" />

  </Head>
  <Navbar dark/>
    <Grid container sx={{mb:'2em'}}>
    <Grid className='bg' item xs={12} md={8} lg={9} sx={{mb:'0em',borderBottomRightRadius:'40px',}} xl={10}>
        <Box  sx={{margin:'0 auto',maxWidth:'xl',px:'1em',py:{xs:'4em',md:'7em'},minHeight:'200px'}}>
          <Box sx={{maxWidth:'md',margin:'0 auto'}}>

        <Typography  className='hero-t1 hid' sx={{color:'white',opacity:0,lineHeight:'1.1em',maxWidth:{xs:'600px',lg:'800px'},fontSize:{xs:'2.75em',sm:'4.2em',md:'4.7em'},fontWeight:'bolder'}} component='h1'>
                    {'Next-Gen Software Solutions'}
                    </Typography>
                    <Typography className=' hero-t2  hid' sx={{color:'white',opacity:0,maxWidth:'450px',my:{xs:2.5,md:2.5},fontSize:{xs:'.80em'}}} component='h4'>
                    {'We specialize in crafting stunning, responsive, budget-friendly web & mobile apps that fuel your growth and enhances your digital presence.'}
                    </Typography>

                    <Box sx={{pt:2}}>

                        <Link className='decor-none' href={'/contact'}>
                        <Btn  blur  sx={{px:{xs:2,sm:3}}} className='hid hero-btn'>
                      {'CONTACT US'}
                        </Btn>
                        </Link>
          </Box>
                     
                    </Box>
                      
                           
                   
        </Box>
    </Grid>
    <Grid item xs={0} md={4} lg={2.8} xl={2}   className='centerize' sx={{display:{xs:'none',md:'flex'},maxWidth:'sm'}}>
        <Box sx={{display:{xs:'none',md:'flex'},height:{xs:'400px',lg:'450px',xl:'480px'},transform:{xs:0,md:'translateX(-25%)',lg:'translateX(-60%)'}}}>
                <img style={{borderRadius:'8px',borderBottomRightRadius:'20px'}} src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Work Image" className="img" />
        </Box>
    </Grid>

    </Grid>

    <Box  maxWidth='xl' sx={{margin:'0 auto',px:'1em'}}>
  

    <Grid container sx={{mb:{xs:11,sm:8,md:0},py:{md:'2em',lg:5},width:'100%',justifyContent:{md:'space-between'},height:{lg:'700px'}}}>
    <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger1 `}>
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'none',sm:'flex'},
                maxHeight:'510px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/2b91fbda-3b9d-432a-a0aa-484303ad75ca/Untitleddesign31.png"}
                    alt="Image"
                    className="img br8"/>
            </Box>
        
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'flex',sm:'none'},
                maxHeight:'510px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/2b91fbda-3b9d-432a-a0aa-484303ad75ca/Untitleddesign31.png"}
                    alt=" services Image"
                    className="img br8"/>
            </Box>
            
        </Grid>
        <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-1`}
            sx={{
                width:'99%',
                maxWidth: '530px'
            }}>
              
                <Box className='flex ' >
                <Typography   component='h1' className='h2 clr2 '>
                E-commerce Website Development
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:.5}}
                    component='p'
                    
                    className='clr2 '>
     Our e-commerce website development services involve designing and building a professional and user-friendly online store for your business.
                </Typography>
                <Link href='/contact' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            View More
                        </Btn>
                            </Link>
            </Box>
        </Grid>
  
    </Grid>

    <Grid container sx={{mb:{xs:11,sm:8,md:0},
                flexWrap:'wrap',
                        
    py:{md:'2em',lg:0},width:'100%',justifyContent:{md:'space-between'},height:{lg:'700px'}}}>
  
        <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-1`}
            sx={{
              display: {xs:'none',md:'block'},
                width:'99%',
                flexWrap:'wrap',
                maxWidth: '530px'
            }}>
              
                <Box className='flex ' >
                <Typography   component='h1' className='h2 clr2 '>
                Business Branding and Website Development
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:.5}}
                    component='p'
                    
                    className='clr2 '>
       Our services include creating a strong brand identity and a professional website for your business to establish a strong online presence and attract more customers.
                </Typography>
                <Link href='/contact' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            Learn More
                        </Btn>
                            </Link>
            </Box>
        </Grid>
        <Grid sx={{
                flexWrap:'wrap',

        }} item xs={12} md={6} lg={6} className={`flex center   title-trigger1 `}>
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                flexWrap:'wrap',
              // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'none',sm:'flex'},
                maxHeight:'510px',
                maxWidth:{xs:'100%',lg:'650px'},
                height:'100%',
                width:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/31c473ed-c20a-494c-8c73-b81dd7837605/Untitleddesign21.png"}
                    alt="Image"
                    className="img br8"/>
            </Box>
        
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'flex',sm:'none'},
                maxHeight:'510px',
                maxWidth:{xs:'100%',lg:'650px'},
                height:'100%',
                width:'100%',
                minWidth:'250px',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/31c473ed-c20a-494c-8c73-b81dd7837605/Untitleddesign21.png"}
                    alt="Image"
                    className="img br8"/>
            </Box>
            <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-1`}
            sx={{
              display: {xs:'block',md:'none'},
                width:'99%',
                maxWidth: '530px'
            }}>
              
                <Box className='flex ' >
                <Typography   component='h1' className='h2 clr2 '>
                Business Branding and Website Development
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:.5}}
                    component='p'
                    
                    className='clr2 '>
       Our services include creating a strong brand identity and a professional website for your business to establish a strong online presence and attract more customers.
                </Typography>
                <Link href='/contact' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            Know More
                        </Btn>
                            </Link>
            </Box>
        </Grid>
        </Grid>
  
    </Grid>
    


  


    <Grid container sx={{mb:{xs:11,sm:8,md:0},py:{md:'2em',lg:0},width:'100%',justifyContent:{md:'space-between'},height:{lg:'700px'}}}>
    <Grid item xs={12} md={6} lg={6} className={`flex center  col title-trigger1 `}>
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'none',sm:'flex'},
                maxHeight:'510px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/05238096-18e8-4c12-ae04-d22a14742aac/Untitleddesign.png"}
                    alt="Image"
                    className="img br8"/>
            </Box>
        
            <Box 
            className={`relative animated-img1 `}
            sx={{opacity:0,
                // position:'sticky',top:0,
                // maxWidth:'650px',
                display: {xs:'flex',sm:'none'},
                maxHeight:'510px',
                width:{xs:'100%',lg:'650px'},
                height:'100%',
                margin:{xs:'1em 0', md:'0 auto'},
                borderRadius: '8px'
            }}>
            
                <img
                    src={ "https://ucarecdn.com/5ed73574-bf82-4f2c-8cc9-82a49791eff0/Untitleddesign111.png"}
                    alt="Image"
                    className="img br8"/>
            </Box>
            
        </Grid>
        <Grid 
        className={`flex center col auto`} item xs={12} md={6} lg={5}>
            <Box
            className={`nb-1`}
            sx={{
                width:'99%',
                maxWidth: '530px'
            }}>
              
                <Box className='flex ' >
                <Typography   component='h1' className='h2 clr2 '>
                Android & IOS Mobile Apps 
                </Typography>
                </Box>
                <Typography
                sx={{maxWidth:'sm',fontSize:'1.2em',mt:.5}}
                    component='p'
                    
                    className='clr2 '>
        Our team develops user-friendly mobile apps for Android and iOS using the latest technologies. We work closely with clients to deliver a seamless user experience.
                </Typography>
                <Link href='/contact' className="decor-none">

                        <Btn
                        className='goal-btn hid'
                        dark
                        sx={{
                            color: '#0D2068',
                            borderColor: '#0D2068',
                            width: 'fit-content',
                            mt: 2
                        }}>

                            More Details
                        </Btn>
                            </Link>
            </Box>
        </Grid>
  
    </Grid>
    </Box>
    </>

  )
}

export default Services