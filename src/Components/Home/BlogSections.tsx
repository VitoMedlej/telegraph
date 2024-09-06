import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/router'
import YouTubeThumbnail from '../YoutubeThumbail/YoutubeThumbnail'
// import post1 from '@/pages/blog/blogArticle2.json'



const BlogSections = ({loading,fetchPosts,posts,title}:any) => {
  const router= useRouter();
  
    return (
    <Box className='' id='latest' sx={{mt:{xs:8,md:8,lg:12},mb:8}}>
        <Container className='flex wrap auto' 
        sx={{justifyContent:{xs:'center',sm:'space-between'}}} maxWidth='lg'>
        <Typography component='h2' sx={{ 
          
          width:'100% ',pb:2}} className='h2 black arb '>
        {title ? title : `آخر الأخبار`}
                        </Typography>
                    
       {posts && posts?.length > 0 && posts.map((post:any)=>{
        
       const thumbnail = post?.isFeatured === true && post?.link ? YouTubeThumbnail({url:post?.link}) : post?.images?.length > 0 ? post?.images[0] : ''; 
       const description = post.description && JSON.parse(post.description)?.blocks[0]?.text || '';

 return <Box key={post._id} className='shadow ' sx={{
  background:'white',
  my:1,width:{xs:'99%',md:'49%'}}}>
                <Box
                
                onClick={() =>
                  router.push(`/blog/${post?._id}`)
                }
                sx={{width:'100%',height:'260px'}}>
                    <img src={`${thumbnail}`} alt={`Blog Post Image ${post?.alt ? post?.alt : ''}`} className="img pointer" />
                </Box>
                <Box sx={{px:1}}>
                <Typography className=''
                 sx={{ pt: '.55em', fontWeight: '600',
                 
                  direction:'rtl',
                  textAlign: 'right',
                 fontSize: '.68em' }}>
    
        <React.Fragment key={post?._id}>
          {/* {index > 0 && ' • '} */}
          <span style={{fontWeight:300}} className=''>{post?.dateAdded}</span> 
            <span style={{margin:'.25em '}}>
            • 
            </span>
          <span className='clr'>
             {post?.category} 
            </span>

            
        </React.Fragment>
    
    </Typography>
    <Typography
  onClick={() =>
    router.push(`/blog/${post?._id}`)
  }
  className='pointer'
  sx={{
    fontWeight: '900',
    fontSize: { xs: '1.45em', sm: '1.35em', md: '1.65em' },
    direction: /[\u0600-\u06FF]/.test(post?.title) ? 'rtl' : 'ltr',
    textAlign: /[\u0600-\u06FF]/.test(post?.title) ? 'right' : 'left',
  }}
>
  {post.title}
</Typography>
<Typography
      onClick={() =>
        router.push(`/blog/${post?._id}`)
      }
      className="pointer clr1"
      sx={{
        fontWeight: '300',
        py:.25,
        fontSize: { xs: '1em', sm: '1em', md: '1em' },
        direction: /[\u0600-\u06FF]/.test(description) ? 'rtl' : 'ltr',
        textAlign: /[\u0600-\u06FF]/.test(description) ? 'right' : 'left',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2, // Limits the text to 2 lines
      }}
    >
      {description}
    </Typography>
                </Box>
                <Box className='flex    ' sx={{
                  
                  direction:'rtl',
                  textAlign: 'right',
                  gap:1.55,px:1}}>


                    <Btn onClick={()=>router.push(`/blog/${post._id}`)} dark  
              
                    sx={{
                      my:2,
                      border:'none',px:0}}>
                        <Typography className='clr' sx={{
                          direction:'ltr',
                          textAlign: 'right',
                        
                          fontWeight:'600 !important',fontSize:"1em"}}>
                        أكمل القراءة     
                                           </Typography>
                    </Btn>
                <Typography sx={{fontWeight:'300',fontSize:'.75em'}}>
                        {post.date}
                    </Typography>
                </Box>
            </Box>
                   })}
                     <Box className='auto center'  sx={{pt:5,minWidth:'80vw',with:'100%'}}>
              <Btn
              onClick={fetchPosts}
               disabled={loading}
             
              dark sx={{px:3,py:.8,fontSize:'.9em'}}>
                Read More
              </Btn>
              </Box>
        </Container>
    </Box>
  )
}

export default BlogSections