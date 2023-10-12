import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/router'



const imgs = [
  `https://ucarecdn.com/41b9b572-ddaf-4784-adbf-91a63b3fcdf8/385574107_820259003440533_2976783838809339635_n.jpg`,
  `https://ucarecdn.com/c1e1a232-a387-4930-b8a1-9475a83fd1ae/376043635_1976805079361485_2069780362277088652_n.jpg`,
  `https://ucarecdn.com/b74df977-01b0-447f-94dd-19086b1d90a9/361580002_248078554743488_5254386685986994212_n.jpg`,
  `https://ucarecdn.com/66cead3f-415c-43a0-b41f-4da8acfb5553/354763393_3422586528061175_7886625568343471589_n.jpg`,
  `https://ucarecdn.com/cd6712b9-821f-430b-990c-c927ca2188ca/342176817_767879414911493_1987723224238491494_n.jpg`,
  `https://ucarecdn.com/cb7fb301-3277-491e-8d32-174b2f63dec3/341365288_3458997591006450_8394307009990602046_n.jpg`,
]
const InstagramSection = () => {
  const router= useRouter();
  
    return (
    <Box sx={{py:8,pb:12}}>
        <Container className='flex wrap auto' sx={{justifyContent:{xs:'center',sm:'space-between'}}} maxWidth='lg'>
        <Box className="flex col  center auto">

        <Typography component='h2' className='h2 clr2 auto center text-center '>
                            Follow Us On Instagram
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            py:1.5,
                        }}
                            className='clr2 text-center auto'>
                                Follow our instagram where we post valuable content for everyone.
                        </Typography>
                        <Box className='auto flex center'  sx={{flex:1,pb:2,with:'100%'}}>
              <a href="https://www.instagram.com/onbeirut/" target='_black' rel='nonrefere' className="decore-none">

              <Btn dark sx={{background:'purple',color:'white',border:'none',':hover':{color:'black'},px:3,py:.8,fontSize:'.9em'}}>
                @onbeirut
              </Btn>
              </a>
              </Box>
        </Box>

              <Box className='flex row wrap'>

       {imgs.map(i=>{

 return <Box key={i} className='shadow' sx={{minWidth:'150px',margin:1,width:{xs:'45%',sm:'47%',md:'31%'}}}>
                <Box sx={{width:'100%',height:{xs:'200px',sm:'350px'}}}>
                    <img src={i} alt="Blog Post Image" className="img cover" />
                </Box>
            
            </Box>
                   })}
              </Box>


        </Container>
    </Box>
  )
}

export default InstagramSection