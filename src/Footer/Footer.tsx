import SMicons from '@/Components/SocialMedia/SMicons';
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const pages = [{href:'/',title:'Home'}, {title:'Services',href:'/services'}, {title:'Pricing',href:'#pricing'},{title:'Portfolio',href:'#portfolio'},{href:'/blog',title:'Blog'},{href:'/contact',title:'Contact'}];

const Footer = () => {
  const router = useRouter()
    return (
    <footer className='footer bg2'>
        <Grid  className=' auto flex space-between' container sx={{maxWidth:'xl',padding:'4.5em .9em',width:'100%',minHeight:'300px'}}>
        <Grid item xs={12} sm={12} md={4}>
            
        <Link

            className=' filter footerlogo'
            href="/" 
          > 
              <img src={  'https://ucarecdn.com/92766691-547c-49fd-812f-0b633857fb06/logoblack_o65q34transformed1.png'
             } 
             className='img' alt="onbeirut logo" />
          </Link>
          <Typography component='p' className='clr3' sx={{fontWeight:'100',maxWidth:'450px',mt:1}}>
          Our experienced team of web professionals specializes in crafting tailored solutions for businesses of all sizes. We focus on delivering engaging, user-friendly websites and mobile apps, and provide ongoing support to help you achieve lasting online success. With our expertise and passion for the digital world, we’re your reliable partner for all your web and mobile development needs.
          </Typography>
          <SMicons sx={{mt:2}}/>

        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={1} sx={{my:{xs:4,sm:0}}}>
            <Typography sx={{color:"white",fontSize:'1.5em',fontWeight:'700',pb:'.25em'}} className='clr4'>Links</Typography>
        {pages.map((page) => (
              <Link
                href={page.href}
                className={` decor-none wfit flex`}
                key={page.title}
                onClick={()=>{router.push(`${page.href}`)}}        
              >
                <Typography className=' clr3' sx={{':hover':{color:'white !important'},my:.5,fontSize:{xs:'1.05em',sm:'1.11em'},fontWeight:'100'}} component='h4'>
                {page.title}
                </Typography>
              </Link>
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>

        <Typography sx={{color:"white",fontSize:'1.5em',fontWeight:'700',pb:'.25em'}} className='clr4'>Contact Us</Typography>
       <a href="https://www.instagram.com/onbeirut/" rel='noreferrer' target='_blank'>
        <Typography sx={{color:"white",fontSize:{xs:'1em',md:'1.3em'},fontWeight:'500',pb:'.25em'}} >@onbeirut</Typography>
       </a>
        <Typography sx={{color:"white",fontSize:{xs:'1em',md:'1.3em'},fontWeight:'500',pb:'.25em'}} >+961 71 287 235</Typography>
        <Typography sx={{color:"white",fontSize:{xs:'1em',md:'1.3em'},fontWeight:'500',pb:'.25em'}} >contact@onbeirut.com</Typography>

        </Grid>
        {/* <Grid item xs={12} sm={12} md={3} lg={4} sx={{my:{xs:4,sm:0}}}>



<iframe width="100%" height="300"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Beirut+(OnBeirut)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Grid> */}
        </Grid>
        </footer>
  )
}

export default Footer