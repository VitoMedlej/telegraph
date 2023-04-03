import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import gsap from 'gsap';







const Portfolio = () => {
    useEffect(() => {
      gsap.to('.portfolio',{background:'#000000f0',duration:1.5,scrollTrigger:{trigger:'.portfolio',markers:false,start:'top 50%'}})
    }, [])
    
  return (
    <Box className='portfolio' sx={{minHeight:'700px',width:'100%',background:'white'}}>
        <Container  maxWidth='lg'>
            <Box  sx={{py:'4em',textAlign:'center'}}>
                <Typography sx={{color:"white",fontWeight:'700',fontSize:{xs:'2em',sm:'3em',md:'3.5em'}}}>
                    Some Text And Shit
                </Typography>
                <Typography sx={{color:"white",fontWeight:'200',fontSize:{xs:'1em',sm:'1.2em'},mb:2}} className='clr3'>
                    Some Text And Shit
                </Typography>
            </Box>
            <Box className='flex space-between wrap'>

         {[1,2,3,4].map((i,idx)=>{   return <Box
         key={i}
         sx={{
          
          
          mt: idx % 2 === 0 ? 0 : 15
          
          
          ,width:'50%',maxWidth:'500px'}}>
                <Box sx={{maxWidth:'500px'}}>
                  <img src="https://kota.co.uk/static/04aafd9a73dd39f39aa06dbae5e151d0/2ad7f/jamie-portrait.webp" alt="Project Image" className="img" />
                </Box>
                <Box>
                  <Typography sx={{fontWeight:"600",fontSize:'.9em',my:1}} className='clr'>
                    Web Development
                  </Typography>
                </Box>
              <Box sx={{color:'white'}}>
                  <Typography sx={{fontWeight:'900',fontSize:{xs:'1.8em',sm:'2.5em'}}}>
                    My Project Titlte
                  </Typography>
                  <Typography className='clr3' sx={{fontWeight:"400",py:'.15em',fontSize:{xs:'.8em'}}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </Typography>
              </Box>
            </Box>})}
            </Box>
        
        </Container>
    </Box>
  )
}

export default Portfolio