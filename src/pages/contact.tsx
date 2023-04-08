import SMicons from '@/Components/SocialMedia/SMicons'
import Navbar from '@/Navbar/Navbar'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import Head  from 'next/head'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Btn from '@/Components/Btn/Btn'
import {BsFillSendFill} from 'react-icons/bs'
const Index = () => {
  const ref = useRef();
  const form = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
  const sendEmail = async(e : any) => {

    e.preventDefault();

    if (!form.current) 
        return;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
        setStatus(400)
        return;
    }

    const req = await emailjs.sendForm(`service_fvka279`, 'template_veigfx8', form.current, 'lbTdA9-5crCdl733u')
    const res = await req
    setStatus(res ? res.status : 400)
};

  return (
    <>
    <Head>
    <title>Contact Page</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Navbar dark/>
  <>
    <Grid container maxWidth='lg'  className='auto'  sx={{py:10}}>

        <Grid item xs={12} sm={6}>
    <Container >
        <Typography className='clr' sx={{fontSize:{xs:'2em'},my:3,fontWeight:'800'}}>
        Reach us at:
        </Typography>
        
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
            Lebanon/Beirut
        </Typography>
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
            @onbeirut
        </Typography>
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
            +961 71 920 255
        </Typography>
        <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>    
        onbeirut@gmail.com
        </Typography>
        <Typography className='clr' sx={{fontSize:{xs:'2em'},my:3,fontWeight:'800'}}>
        Social media:
        </Typography>
        <SMicons color='black' sx={{'a':{borderColor:'black'},mt:2.5}}/>
    </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Container component='form' sx={{gap:1}} className='flex space-between wrap'>
              <TextField sx={{width:'49%',py:1}} variant='outlined' placeholder='First Name'/>
              <TextField variant='outlined' sx={{width:'49%',py:1}} placeholder='Last Name'/>
              <TextField variant='outlined' sx={{width:'99%',py:1}} type='email' placeholder='Email'/>
              <TextField variant='outlined' sx={{width:'99%',py:1}} placeholder='Phone Number (Optional)'/>
              <TextField multiline={true} variant='outlined' rows={4}  sx={{width:'99%',py:2}} placeholder='Message'/>
              <Btn dark >
                Submit
                <BsFillSendFill/>
              </Btn>
            </Container>
        </Grid>
    </Grid>

  </>
    </>
  )
}

export default Index