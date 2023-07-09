import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import Btn from '../Btn/Btn';
import Link from 'next/link';






const projects = [
  {
    title : 'TeenTops Electronics',
    href : 'teentops-lb.com',
    link : 'https://teentops-lb.com/',
    description : 'An Online Electronics Store ',
    img : 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web dev','ecommerce','online shop']
  },
  {
    title : 'Powerhouse European Appliances',
    href : 'powerhouse-lb.com',
    link : 'https://powerhouse-lb.com/',
    description : 'European house appliances supplier',
    img : 'https://images.pexels.com/photos/4865059/pexels-photo-4865059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web dev','ecommerce']
  },
  {
    title : 'Zekra For Natural Cosmetics',
    href : 'zekra.shop',
    link : 'https://zekra.shop/',
    description : 'A natural cosmetics online shop',
    img : 'https://images.pexels.com/photos/7038154/pexels-photo-7038154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web dev','ecommerce']
  },
  {
    title : 'Namliieh Online Shop',
    href : 'namliiehshop.com',
    link : 'https://namliiehshop.com/',
    description : 'Dynamic lifestyle brand from Lebanon. Makers of artisan products.',
    img : 'https://images.pexels.com/photos/6042358/pexels-photo-6042358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web design','Brand']
  },
  
]
const Portfolio = () => {
    useEffect(() => {
      gsap.to('.portfolio',{background:'#000000f0',duration:.5,scrollTrigger:{trigger:'.portfolio',markers:false,start:'top 50%'}})
      gsap.to('.img-hider-0',{height:'0%',scrollTrigger:{trigger:'.project-0',start:'10% 60%'}})
      gsap.to('.img-hider-1',{height:'0%',scrollTrigger:{trigger:'.project-1',start:'10% 60%'}})
      gsap.to('.img-hider-2',{height:'0%',scrollTrigger:{trigger:'.project-2',start:'10% 60%'}})
      gsap.to('.img-hider-3',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})

    }, [])
    
  return (
    <Box className='portfolio' id='portfolio' sx={{minHeight:'700px',width:'100%',background:'white'}}>
        <Container sx={{pb:"4em"}}  maxWidth='lg'>
            <Box  sx={{py:'4em',textAlign:'center'}}>
                <Typography sx={{color:"white",fontWeight:'700',fontSize:{xs:'2em',sm:'3em',md:'3.5em'}}}>
                 Success Stories Showcase
                </Typography>
                <Typography sx={{color:"white",fontWeight:'200',fontSize:{xs:'1em',sm:'1.2em'},mb:2}} className='clr3'>
                    Few of our recent projects from clients that rate us 5 stars 
                </Typography>
            </Box>
            <Box className='flex space-between wrap'>

         {projects.map((project,idx)=>{   return <Box
         key={project.title}
         className={`project-${idx}`}
         sx={{
          pb:{xs:4,sm:'auto'},
          mt: {xs:0,sm:idx % 2 === 0 ? 0 : 15}
          ,width:{xs:'99%',sm:'50%'},maxWidth:'500px'}}>
                
                <Box className='relative' sx={{height:'100%',maxHeight:{xs:'450px',sm:'550px',md:'600px',lg:'650px'},maxWidth:'500px'}}>
                  
                  <Box className={`absolute img-hider-${idx}`} sx={{background:'#0f0f0f',height:'20%',top:0,width:'100%',maxWidth:'650px'}}/>
                  <img src={project.img} alt="Project Image" className="img" />
                </Box>
                <Box className='flex row' sx={{gap:'.5em'}}>
                    {
                      project.cate.map(cate=>{
                        return <Typography key={cate} sx={{fontWeight:"600",fontSize:'.9em',my:1}} className='clr'>
                      {cate}
                  </Typography>
                      })
                    }
                </Box>
                <a href={project.link} target='_blank' style={{color:'white'}} rel={'noneferrer'}>

                  <Typography sx={{fontWeight:"600",fontSize:'.9em',my:.15}} className='clr3'>
                  {project.href}
              </Typography>
                </a>
              <Box sx={{color:'white'}}>
                <a href={project.link} target='_blank' rel={'noneferrer'} style={{color:'white',textDecoration:'none'}}>

                  <Typography sx={{fontWeight:'900',cursor:'pointer',fontSize:{xs:'1.8em',sm:'2.5em'}}}>
                    {project.title}
                  </Typography>
                </a>
                  <Typography className='clr3' sx={{fontWeight:"400",py:'.15em',fontSize:{xs:'.8em'}}}>
                      {project.description}
                  </Typography>
              </Box>
            </Box>})}
            </Box>
            <Box className='auto center'  sx={{pt:5,with:'100%'}}>
            <Link href='/contact'>

            <Btn >
              Get Your Own
            </Btn>
            </Link>
            </Box>
        </Container>
    </Box>
  )
}

export default Portfolio