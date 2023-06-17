import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/router'



const posts = [
    {
        title : 'Start a Blog in 5 Easy Steps (do this before monetizing it)',
        date : 'Jan 20, 2023 ',
        img : 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        href : '/blog', 
        id:1,
    },
    {
        title : 'Blog Post Coming Soon | Check Our Insta For News',
        date : '2023/7/4',
        img : 'https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg',
        href : '/blog', 
        id:2,
    }
    ,
    {
        id:3,
        title : 'Blog Post Coming Soon | Check Our Insta For News',
        date : '2023/7/4',
        img : 'https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg',
        href : '/blog', 
    }
]
const BlogSections = () => {
  const router= useRouter();
  
    return (
    <Box sx={{mb:6}}>
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
       {posts && posts.map(i=>{

 return <Box key={i.id} className='shadow' sx={{maxWidth:'400px',my:1,width:{xs:'99%',sm:'49%',md:'33%'},}}>
                <Box sx={{width:'100%',height:'260px'}}>
                    <img src={i.img} alt="Blog Post Image" className="img" />
                </Box>
                <Box sx={{px:1}}>
                    <Typography className='clr' sx={{pt:'.25em',fontWeight:'600',fontSize:'.8em'}}>
                        Web Development • Tech • Web Design
                    </Typography>
                    <Typography className='pointer' sx={{fontWeight:'700',fontSize:{xs:'1.05em',sm:'1.15em',md:'1.25em'}}}>
                        {i.title}
                    </Typography>
                </Box>
                <Box className='flex   align-center ' sx={{gap:1.55,px:1}}>
                    <Btn onClick={()=>router.push(`${i.href}`)} dark  sx={{border:'none',px:0}}>
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