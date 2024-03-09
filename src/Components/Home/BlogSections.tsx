import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/router'
// import post1 from '@/pages/blog/blogArticle2.json'
import { postsArray } from '@/pages/blog/[id]'



const BlogSections = () => {
  const router= useRouter();
  
    return (
    <Box sx={{my:6}}>
        <Container className='flex wrap auto' sx={{justifyContent:{xs:'center',sm:'space-between'}}} maxWidth='lg'>
        <Typography component='h2' className='h2 clr2 '>
                            Read Our Articles
                        </Typography>
                        <Typography
                            component='p'
                            sx={{
                            mt: 1.5,mb:4,
                        }}
                            className='clr2 '>
                            Stay informed with our blog, featuring expert insights and industry updates for web enthusiasts
                        </Typography>
       {postsArray && postsArray.map(i=>{

 return <Box key={i.id} className='shadow' sx={{maxWidth:'400px',my:1,width:{xs:'99%',sm:'49%',md:'33%'},}}>
                <Box sx={{width:'100%',height:'260px'}}>
                    <img src={i.img} alt="Blog Post Image" className="img" />
                </Box>
                <Box sx={{px:1}}>
                <Typography className='clr' sx={{ pt: '.25em', fontWeight: '600', fontSize: '.8em' }}>
      {i.tags.map((word, index) => (
        <React.Fragment key={index}>
          {index > 0 && ' • '}
          {word}
        </React.Fragment>
      ))}
    </Typography>
                    <Typography
                    
                    onClick={()=>router.push(`/blog/${i.id}?title=${i.title.replaceAll(' ', '-')}`)}
                    className='pointer' sx={{fontWeight:'700',fontSize:{xs:'1.05em',sm:'1.15em',md:'1.25em'}}}>
                        {i.title}
                    </Typography>
                </Box>
                <Box className='flex   align-center ' sx={{gap:1.55,px:1}}>
                    <Btn onClick={()=>router.push(`/blog/${i.id}?title=${i.title.replaceAll(' ', '-')}`)} dark  sx={{border:'none',px:0}}>
                        <Typography className='clr' sx={{fontWeight:'600 !important',textAlign:'left',fontSize:".8em"}}>
                        Read Now
                        </Typography>
                    </Btn>
                <Typography sx={{fontWeight:'300',fontSize:'.75em'}}>
                        {i.date} | OnBeirut 
                    </Typography>
                </Box>
            </Box>
                   })}
                     <Box className='auto center'  sx={{pt:5,with:'100%'}}>
              <Btn dark sx={{px:3,py:.8,fontSize:'.9em'}}>
                Read More
              </Btn>
              </Box>
        </Container>
    </Box>
  )
}

export default BlogSections