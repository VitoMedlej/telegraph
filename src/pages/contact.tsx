import SMicons from '@/Components/SocialMedia/SMicons'
import Navbar from '@/Navbar/Navbar'
import {  Container,Box, Grid, TextField, Typography } from '@mui/material'
import Head  from 'next/head'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Btn from '@/Components/Btn/Btn'
import {BsFillSendFill} from 'react-icons/bs'
const Index = () => {
 
  const form :any = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
  const sendMessage = async(e : any) => {

    e.preventDefault();

    if (!form.current) 
        return;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
        setStatus(400)
        return;
    }

    const req = await emailjs.sendForm(`service_eig2qxb`, 'template_gc3j6xq', form.current, '8qJYIm7toZyMq3yN_')
    const res = await req
    setStatus(res ? res?.status : 400)
    if (res?.status && form?.current) {
      form?.current?.reset()
    }
};

  return (
    <>
    <Head>
    <title>Contact Us | OnBeirut Agency </title>
    <meta name="description" content="Contact our team today and get in touch with us for more information on our services. We're here to help and provide support to answer any questions you may have." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://ucarecdn.com/3d4abdb1-ac77-45ea-9fc2-30f85a0e1b06/obiconv3.JPG" />
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
            +961 76 910 252
        </Typography>
      <Typography className='clr2' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>    
        contact@onbeirut.com
        </Typography>
        <Typography className='clr' sx={{fontSize:{xs:'2em'},my:3,fontWeight:'800'}}>
        Social media:
        </Typography>
        <SMicons color='black' sx={{'a':{borderColor:'black'},mt:2.5}}/>
    </Container>
        </Grid>  
        <Grid sx={{mt:{xs:2,sm:0}}} item xs={12} sm={6}>
          <Typography component='h1' sx={{color:'green',fontWeight:'500',textAlign:'center'}} className='h1'>{status === 200 ? 'Thanks for messaging us, expect a reply soon!' : ""}</Typography>
            <Box ref={form} onSubmit={(e)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          px:'1em',
            
          boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} className='flex space-between wrap'>
              <TextField name={'FirstName'} sx={{width:'49%',py:1}} variant='standard' placeholder='First Name'/>
              <TextField name={'LastName'} variant='standard' sx={{width:'49%',py:1}} placeholder='Last Name'/>
              <TextField name={'Email'} onChange={(e)=>setEmail(e?.target?.value)} variant='standard' sx={{width:'99%',py:1}} type='email' placeholder='Email'/>
              <TextField name={'Phone'} variant='standard' sx={{width:'99%',py:1,}} placeholder='Phone Number (Optional)'/>
              <TextField name={'Message'} multiline={true} variant='standard' rows={4}  sx={{width:'99%',py:2}} placeholder='Message'/>
              <Btn dark>
                Submit
                <BsFillSendFill/>
              </Btn>
            </Box>
        </Grid>
    </Grid>

  </>
    </>
  )
}

export default Index