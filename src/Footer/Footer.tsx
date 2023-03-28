import SMicons from '@/Components/SocialMedia/SMicons';
import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const pages = [{href:'/',title:'Home'}, {title:'Services',href:'/services'}, {title:'Pricing',href:'#pricing'},{title:'Portfolio',href:'#portfolio'},{href:'/blog',title:'Blog'},{href:'#contact',title:'Contact'}];

const Footer = () => {
  const router = useRouter()
    return (
    <footer className='footer bg2'>
        <Grid  className=' auto flex space-between' container sx={{maxWidth:'xl',padding:'2em 1em',width:'100%',minHeight:'300px'}}>
        <Grid item xs={12} sm={6} md={4}>
            
        <Link

            className='logo filter'
            href="/" 
          > 
              <img src={  'https://ucarecdn.com/92766691-547c-49fd-812f-0b633857fb06/logoblack_o65q34transformed1.png'
             } 
             className='img' alt="" />
          </Link>
          <Typography component='h1' className='clr3' sx={{maxWidth:'450px',mt:1}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut in ullam quas officiis eligendi molestias, repellat 
            veritatis perspiciatis expedita quaerat voluptatum debitis. Veniam voluptatibus, quae amet reprehenderit perspiciatis quisquam eius!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{my:{xs:4,sm:0}}}>
            <Typography sx={{color:"white",fontSize:'1.5em',fontWeight:'700',pb:'.25em'}} className='clr4'>Links</Typography>
        {pages.map((page) => (
              <Link
                href={page.href}
                className={` decor-none wfit flex`}
                key={page.title}
                onClick={()=>{router.push(`${page.href}`)}}
                
              >
                <Typography className='hover clr3' sx={{color:'white',my:.5,fontSize:{xs:'1.05em',sm:'1.11em'},fontWeight:'500'}} component='h4'>
                {page.title}
                </Typography>
              </Link>
            ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography sx={{color:"white",fontSize:'1.5em',fontWeight:'700',pb:'.25em'}} className='clr4'>Contact Us</Typography>
        <Typography sx={{color:"white",fontSize:'2.5em',fontWeight:'500',pb:'.25em'}} >onbeirut@gmail.com</Typography>

          <SMicons/>
        </Grid>
        </Grid>
        </footer>
  )
}

export default Footer