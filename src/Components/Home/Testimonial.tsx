import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {AiFillStar} from 'react-icons/ai';



const Clients = [
    {id:1,
        description:`We’re a local business and most of our clients are Lebanese. What I love about the site is that it supports both arabic and english at the same time.`,
        name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
        {id:2,
            description:`I was so impressed with the shop they built for me - it was so easy to use! And when they built my Android app, I knew I made the right choice. No regrets at all.`,
            name:'Yehya, Co-Founder of Teentops',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
        {id:3,
            description:`OnBeirut really came through for me. I was worried that my huge inventory would be too much for the site to handle, but they made it work perfectly. I’m so grateful for them.`,
            name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

]
const Testimonial = () => {
  return (
    <Box sx={{
        my: {
            xs: '3em',
            sm: '3.5em'
        },
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize:'cover',
        color:'white',
        py : {
            xs: '3em',
            sm: '3.5em'
        },
        backgroundImage: 'url(https://img.freepik.com/free-vector/black-desktop-background-geometric-pattern-design-vector_53876-140229.jpg?w=826&t=st=1686216169~exp=1686216769~hmac=db0094bd88fafd2bb654bb5cdf6b28796f7293901e4b68cb627ea1513de01cd8)'
    }}>
       
            <Container
                className='mx'
                sx={{
                  maxWidth:'xl',
               
                // px: '1em'
            }}>
                <Typography component='h2' sx={{textTransform:'capitalize',color:'white !important'}} className='h2  '>
                        What our clients say about us 
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                                color:'white !important',
                                mt: 1.5
                        }}
                          >
                           Happy clients, happy life. We value our promises to the maximum.
                        </Typography>
               
               <Box sx={{display:"flex",gap:{xs:'1em',sm:'1.5em'},mt:'4em',flexWrap:'wrap',justifyContent:{xs:'center',md:'space-between'}}}>
                {
                    Clients.map(item=>{
                        return <Box key={item.id} sx={{
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                transform: {lg:item.id !== 2  ? `translateY(-${item.id * 13}px)` : ''},
                            px:'1.5em',py:'1.25em',maxWidth:{xs:'100%',sm:'300px',lg:'320px'},background:'white',borderRadius:'20px',display:'flex'}}>
                            <Box sx={{width:'150px',borderRadius:'50%',transform:'translateX(-15px)',mt:'7px',height:'45px'}}>
                                <img src={item.img} alt="Client's Testimonial  Logo" className="img cover"  />
                            </Box>
                            <Box>
                            <Typography component='h4' sx={{color:'black',fontWeight:500}}>{item.name}</Typography>
                            <Box>
                            <AiFillStar color='gold' />
                            <AiFillStar color='gold' />
                            <AiFillStar color='gold' />
                            <AiFillStar color='gold' />
                            <AiFillStar color='gold' />
                            </Box>
                            <Typography component='h4' sx={{pt:'.25em',fontSize:'.9em',color:'black'}}>
                              {item.description}
                            </Typography>
                            </Box>
                        </Box>
                    })
                }
               </Box>
            </Container>
    </Box>
  )
}

export default Testimonial