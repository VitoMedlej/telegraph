import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import Btn from '../Btn/Btn';
import Link from 'next/link';
import { useRouter } from 'next/router';






const projects = [
  {
    title : 'Conceptual | Women Fashion Wear',
    href : 'www.conceptual-wic.com',
    link : 'https://www.conceptual-wic.com/',
    description : 'Women Streetwear Online Shop',
    img : 'https://images.pexels.com/photos/10923286/pexels-photo-10923286.jpeg?auto=compress&cs=tinysrgb&w=700&lazy=load',
    cate : ['Ecommerce','Classic','clothing','For Women']
  },
  {
    title : 'Amaria Natural Skin Care',
    href : 'amaria.beauty',
    link : 'https://amaria.beauty/',
    description : 'Liscened dietitian, aromatherapists, herbalist',
    img : 'https://ucarecdn.com/62e3fa82-b277-4919-9eef-930660840338/413040906_17962573337695373_7471455854767187837_n.jpg',
    cate : ['Store','Organic Products','Herbs','Skin care']
  },
  {
    title : 'DIY Crafts Diamond Painting',
    href : 'diycraftsdiamond.com',
    link : 'https://diycraftsdiamond.com/',
    description : 'Art and DIY Craft Supplies Store',
    img : 'https://images.pexels.com/photos/10984997/pexels-photo-10984997.jpeg?auto=compress&cs=tinysrgb&w=700',
    cate : ['Web dev','Online store','Branding','New Idea']
  },
  {
    title : 'BeeOrganic For Natural Honey',
    href : 'beeorganic-lb.com',
    link : 'https://beeorganic-lb.com/',
    description : 'Premium Organic Honey From Lebanon',
    img : 'https://ucarecdn.com/20fdd745-f27d-4fcc-810a-b1579112422f/-/resize/700x700/',
    cate : ['Local Shop','Online store','Honey','Organic Store']
  },
  {
    title : 'Number One By Carla',
    href : 'number1bycarla.com',
    link : 'https://number1bycarla.com/',
    description : 'Tanning oils & Body oils Brand',
    img : 'https://ucarecdn.com/96a270dc-3a32-432a-a2cd-5db9503d013b/417767658_746143730765594_3189711186697857321_n.jpg',
    cate : ['Online Shop','New Brand','Oils','New Products']
  },
  {
    title : 'Pets Town Shop',
    href : 'petstown-lb.com',
    link : 'https://www.petstown-lb.com/',
    description : 'Pet Products Supplier',
    img : 'https://ucarecdn.com/a516f876-e25e-4b10-a3ef-b231f38c7ea7/pexelsphoto6864673.jpeg',
    cate : ['Web dev','Branding','Ecommerce']
  },
  {
    title : 'True Nature Blend',
    href : 'truenatureblend.com',
    link : 'https://truenatureblend.com/',
    description : 'Healthy Natural Supplements Shop   ',
    img : 'https://ucarecdn.com/f27f5048-940f-4a0f-9ab5-6aa91906d1f5/-/resize/700x700/',
    cate : ['Web dev','Online store','Branding','Startup']
  },

  {
    title : 'The Craft Room Shop',
    href : 'thecraftroom-lb.com',
    link : 'https://www.thecraftroom-lb.com/',
    description : 'Craft Supplies In Lebanon',
    img : 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web development','Brand','Ecommerce']
  },
  {
    title : 'Mounet Dalia Traditional Lebanese Food',
    href : 'mounetdalia.com',
    link : 'https://www.mounetdalia.com/',
    description : 'Authentic & Natural Lebanese Mouneh',
    img : 'https://ucarecdn.com/1a95afe1-0e8e-41fb-a4fa-00ef857ef23a/418621867_1412854806328214_6415211719117463606_n.jpg',
    cate : ['Authentic','Food','Traditional','Ecommerce']
  },

  {

title : 'LebNorth Electronics',
href : 'lebnorth.com',
link : 'https://lebnorth.com/',
description : 'Premium Tech Products and Accessories Shop',
img : 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
cate : ['Web Development','Technology','Products','Ecommerce']
  },
  {
    title : 'DesignCompass Lebanon',
    href : 'designcompass-lb.com',
    link : 'https://www.designcompass-lb.com/',
    description : 'Interior Design Firm, 12 years of experience',
    img : 'https://images.pexels.com/photos/53212/one-world-trade-center-manhattan-owtc-new-york-53212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Web Design','Interior Design','Firm','Branding']
  },
  {
    title : 'Shine Plus Car Spa',
    href : 'shinepluscarspa.com',
    link : 'https://shinepluscarspa.com/',
    description : 'Automotive Care Center In Lebanon',
    img : 'https://images.pexels.com/photos/6872574/pexels-photo-6872574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cate : ['Car Care','SEO','Car Spa','Automotive']
  },


]
const Portfolio = () => {
  const [limit,setLimit] = useState(6)
    useEffect(() => {
      gsap.to('.portfolio',{background:'#000000f0',duration:.5,scrollTrigger:{trigger:'.portfolio',markers:false,start:'top 50%'}})
      gsap.to('.img-hider-0',{height:'0%',scrollTrigger:{trigger:'.project-0',start:'10% 60%'}})
      gsap.to('.img-hider-1',{height:'0%',scrollTrigger:{trigger:'.project-1',start:'10% 60%'}})
      gsap.to('.img-hider-2',{height:'0%',scrollTrigger:{trigger:'.project-2',start:'10% 60%'}})
      gsap.to('.img-hider-4',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-5',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-6',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-7',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-8',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-9',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})
      gsap.to('.img-hider-10',{height:'0%',scrollTrigger:{trigger:'.project-3',start:'10% 60%'}})

    }, [])
    const router = useRouter()
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

         {projects.slice(0,limit).map((project,idx)=>{   return <Box
         key={project.title}
         className={`project-${idx}`}
         sx={{
          pb:{xs:4,md:'auto'},
          mt: {xs:4,md:idx % 2 === 0 ? 0 : 15}
          ,width:{xs:'99%',md:'50%'},maxWidth:'500px'}}>
                
                <Box className='relative' sx={{height:{xs:'450px',sm:'550px',md:'600px',lg:'650px'},maxWidth:'500px'}}>
                  
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
        </Container>
            <Box className='auto center'  sx={{pb:'4em',with:'100%'}}>
           

            <Btn onClick={()=>
              limit > 6 ?router.push('/contact'): setLimit(20)
            }>
                  {limit > 6 ? 'Contact Us Already!' : 'LOAD MORE PROJECTS'}
            </Btn>
            </Box>
    </Box>
  )
}

export default Portfolio