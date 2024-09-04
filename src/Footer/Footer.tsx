"use client"
import Link from 'next/link';
import {Typography , Box, Grid } from '@mui/material'
import SMicons from '@/Components/SocialMedia/SMicons';



const Footer = () => (
      <Box component='footer'  className='bg'> 
          <Grid container className='auto' sx={{py:8,px:2,maxWidth:'md'}} >
            <Grid item xs={12} sm={6} lg={6}>
              <Box>
                  <Typography
                  className=''
                  sx={{maxWidth:'300px',fontSize:'.7em',color:'white'}}>
                  Stay informed with the latest updates from Lebanon and around the world. Follow us on social media to never miss out on important news and stories.
                  </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
        <Box sx={{pt:{xs:4,sm:0}}}>
          <Typography className='white' component={'h1'} sx={{fontWeight:'600',fontSize:'.9em',pb:1}}>
              Site Links
          </Typography>
          <Box sx={{gap:1}} className="flex wrap col gap1">

          <Link href='/' className='white decor-none' style={{fontSize:'.8em'}}>
              Home
          </Link>
          <Link href='/about' className='white decor-none' style={{fontSize:'.8em'}}>
              About
          </Link>
        
          </Box>

        </Box>
</Grid>



<Grid item xs={12} sm={3} md={3}>
<Box sx={{pt:{xs:4,sm:0}}}> 
          <Typography className='white' component={'h1'} sx={{fontWeight:'600',fontSize:'.9em',pb:1}}>
              Contacts
          </Typography>
          <Box className="flex wrap col gap1 white">
            <Typography sx={{wordBreak:'break-all'}}>

          Newstelegraphlb@gmail.com
            </Typography>
        
          
          </Box>

        </Box>
        <Box sx={{mt:2}}>

        <SMicons/>
        </Box>
</Grid>
          </Grid>
          <Box className='flex  center auto' sx={{background:'#ffffff',py:1,color:'#494949d0'}}>
            <Typography component='p' sx={{fontSize:'.8em'}}>
            Site Developed By <span><a target='_blank' href='https://NewsTelegraph.com'>News Telegraph</a></span>
            </Typography>
          </Box>
      </Box>
);


export default Footer

