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
    title : 'Olive Deirmimas',
    href : 'olivedeirmimas.com',
    link : 'https://olivedeirmimas.com/',
    description : 'Premium Olive Oil Manufacturer',
    img : 'https://ucarecdn.com/81f7b924-bf93-4823-9931-66200e780158/358363523_6623745227676155_4132016340727114010_n.jpg',
    cate : ['Web dev','Single Product','Branding']
  },
  {
    title : 'Pets Town Shop',
    href : 'petstown-lb.com',
    link : 'https://www.petstown-lb.com/',
    description : 'Pet Products Supplier',
    img : 'https://images.pexels.com/photos/2248516/pexels-photo-2248516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web dev','branding','ecommerce']
  },
  {
    title : 'The Craft Room Shop',
    href : 'thecraftroom-lb.com',
    link : 'https://www.thecraftroom-lb.com/',
    description : 'Craft Supplies In Lebanon',
    img : 'https://images.pexels.com/photos/18199526/pexels-photo-18199526/free-photo-of-woman-making-a-drawing-on-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web development','Brand','ecommerce']
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