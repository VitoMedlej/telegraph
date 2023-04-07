import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const BlogSections = () => {
  return (
    <Box>
        <Container maxWidth='xl'>
        <Box className='shadow'>
                <Box sx={{width:{xs:'99%',sm:'49%',md:'33%'},maxWidth:'450px'}}>
                    <img src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg" alt="" className="img" />
                </Box>
                <Box>
                <Typography sx={{fontWeight:'300',fontSize:'.75em'}}>
                        2023/7/4 | OnBeirut 
                    </Typography>
                    <Typography className='clr' sx={{fontWeight:'400',fontSize:'.8em'}}>
                        Web Development • Tech • Web Design
                    </Typography>
                    <Typography sx={{fontWeight:'700',fontSize:{xs:'1.5em',sm:'1.65em'}}}>
                        Blog Post Coming Soon
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default BlogSections