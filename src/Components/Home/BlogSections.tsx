import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const BlogSections = () => {
  return (
    <Box sx={{mb:6}}>
        <Container className='flex wrap auto' sx={{justifyContent:{xs:'center',sm:'space-between'}}} maxWidth='lg'>
        <Typography component='h2' className='h2 clr2 '>
                            Making brands a damn site better
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5,mb:4,
                        }}
                            className='clr2 '>
                            Let’s face it, first impressions matter. Your website’s an opportunity to wow
                            your audience, so why waste it with bad design? Because brands win new fans when
                            they’re brave enough to go beyond their creative comfort zone.
                        </Typography>
       {[1,2,3].map(i=>{

 return <Box key={i} className='shadow' sx={{maxWidth:'400px',my:1,width:{xs:'99%',sm:'49%',md:'33%'},}}>
                <Box sx={{width:'100%'}}>
                    <img src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg" alt="" className="img" />
                </Box>
                <Box sx={{px:1}}>
                    <Typography className='clr' sx={{fontWeight:'600',fontSize:'.8em'}}>
                        Web Development • Tech • Web Design
                    </Typography>
                    <Typography className='pointer' sx={{fontWeight:'700',fontSize:{xs:'1.05em',sm:'1.15em',md:'1.25em'}}}>
                        Blog Post Coming Soon | Check Our Insta For News
                    </Typography>
                </Box>
                <Box className='flex   align-center ' sx={{gap:1.55,px:1}}>
                    <Btn dark  sx={{border:'none',px:0}}>
                        <Typography className='clr' sx={{fontWeight:'600',textAlign:'left',fontSize:".8em"}}>
                        Read Now
                        </Typography>
                    </Btn>
                <Typography sx={{fontWeight:'300',fontSize:'.75em'}}>
                        2023/7/4 | OnBeirut 
                    </Typography>
                </Box>
            </Box>
                   })}
                     <Box className='auto center'  sx={{pt:5,with:'100%'}}>
              <Btn dark sx={{px:3,py:.8,fontSize:'.9em'}}>
                Get Your Own
              </Btn>
              </Box>
        </Container>
    </Box>
  )
}

export default BlogSections