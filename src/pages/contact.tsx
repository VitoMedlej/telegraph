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
    <title>Contact Us Page | News Telegraph </title>
    <meta name="description" content="Contact our team today and get in touch with us for more information on our services. We're here to help and provide support to answer any questions you may have." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://ucarecdn.com/d61bbd32-7e00-4c97-ab6e-830a55d2c430/426298383_862973212505626_547961837728015954_n.jpg" />

  </Head>
  <Navbar dark/>
  <Box sx={{background:'white'}}>
    <Grid container maxWidth='lg'  className='auto'  sx={{background:'white',py:10}}>

    
        <Grid sx={{mt:{xs:2,sm:0}}} item xs={12} sm={6}>
          <Typography component='h2' sx={{color:'green',fontWeight:'500',textAlign:'center'}} className='h1'>{status === 200 ? 'Thanks for messaging us, expect a reply soon!' : ""}</Typography>
            <Box ref={form} onSubmit={(e)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          px:'1em',
            
        }} className='flex space-between wrap'>
              <TextField name={'FullName'} sx={{width:'99%',py:1}} variant='outlined' placeholder='Full Name'/>
              <TextField name={'Email'} onChange={(e)=>setEmail(e?.target?.value)} variant='outlined' sx={{width:'99%',py:1}} type='email' placeholder='Email'/>
              <TextField name={'Message'} multiline={true} variant='outlined' rows={4}  sx={{width:'99%',py:1}} placeholder='Message'/>
              <Btn sx={{width:'100%'}} className='bg'>
                Submit
              </Btn>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
    <Container >
        <Typography component='h1' className='clr arb' sx={{fontSize:{xs:'1.4em'},my:3,fontWeight:'800'}}>
       

نيوزتلغراف.نت تستهدف نقل العالم وشرحه، وإضافة أفضل المعلومات والتحليلات لفهم الأحداث
        </Typography>
        
        <Typography className='arb' sx={{fontSize:{xs:'1.35em'},fontWeight:'500'}}>
        أخبار منوعة من لبنان والعالم
        </Typography>
        <Typography className='arb ' sx={{fontSize:{xs:'1.05em'},fontWeight:'400'}}>
        للتبرع ودعم عملنا في مجال الصحافة المستقلة يُرجى التواصل معنا عبر أرقام الهاتف أدناه

        </Typography>

        <Typography className='arb clr' sx={{mt:4,fontSize:{xs:'1.35em'},fontWeight:'800'}}>
        الأخبار الواردة لا تُعبّر بالضرورة عن رأي وتوجهات الموقع
        </Typography>
        <Typography className='arb clr' sx={{fontSize:{xs:'1.35em'},fontWeight:'800'}}>
        موقع نيوزتلغراف.نت ملائم للأشخاص ذوي الإعاقة البصرية
        </Typography>

      <Typography className='arb' sx={{mt:2,wordBreak:'break-all',fontSize:{xs:'1.05em'},fontWeight:'400'}}>    
     {
      `
      موقع "نيوزتلغراف.نت" مُسجل في وزارة الاقتصاد والتجارة اللبنانية - المديرية العامة للإقتصاد والتجارة, مصلحة حماية الملكية الفكرية
      `
     }
        </Typography>

        <Typography className='arb' sx={{mt:2,wordBreak:'break-all',fontSize:{xs:'1.05em'},fontWeight:'400'}}>    
      {
        `
        ومُسجل في وزارة الاعلام اللبنانية - المجلس الوطني للإعلام المرئي والمسموع، علم وخبر رقم ٢٣/٢٢٧ تشرين الأول ٢٠١٨ 
        `
      }
        </Typography>



        <Typography className='clr' sx={{fontSize:{xs:'1.4em'},my:3,fontWeight:'800'}}>
        للتواصل او الإعلان أو للرعاية الإعلامية       
        </Typography>
        <Typography className='' sx={{mt:2,wordBreak:'break-all',fontSize:{xs:'1.05em'},fontWeight:'400'}}>    
        Newstelegraphlb@gmail.com 
 
          </Typography>
          <Typography className='' sx={{wordBreak:'break-all',fontSize:{xs:'1.05em'},fontWeight:'400'}}>    
T/WA: 00961.3.988292
          </Typography>
        <SMicons color='black' sx={{'a':{borderColor:'black'},mt:2.5}}/>
    </Container>
        </Grid>  
    </Grid>

  </Box>
    </>
  )
}

export default Index