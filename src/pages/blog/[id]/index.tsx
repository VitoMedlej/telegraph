"use client"
import RenderText from '@/Components/RenderText/RenderText'
import SMicons from '@/Components/SocialMedia/SMicons'
import { getYouTubeId } from '@/Components/YoutubeThumbail/YoutubeThumbnail'
import Navbar from '@/Navbar/Navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';




interface Post {
  images: string[];
  _id: string;
  title: string;
  description: string;
  isFeatured ?: boolean;
  link ?: string;
  // other fields as necessary
}

const fetchPostById = async (id: string): Promise<Post | null> => {
  try {
    const res = await fetch(`/api/get-by-id?id=${id}`);
    
    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    const post = data?.data?.post;
    console.log('post: ', post);

    if (data.success && post) {
      return post;
    } else {
      console.error('Failed to fetch post:', data.message || 'Unknown error');
      return null;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};



export default function Index({selectedPost,sectionTitleContents}:any) {
 
  const router = useRouter()
  const {id} = router.query
  const [post, setPost] = useState<Post | null>(null);
  console.log('post: ', post);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (typeof id !== 'string') return;
      setLoading(true);
      setError(null);
      
      const fetchedPost = await fetchPostById(`${id}`);
      console.log('fetchedPost: ', fetchedPost);
      
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        setError('Failed to load post.');
      }
      
      setLoading(false);
    };
    
    fetchPost();
  }, [id]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <>
      <Head>
      <title>
      أخبار لبنان والعالم - News Telegraph | تغطية شاملة للأحداث من حولك</title>
        <meta name="description" content={`
News Telegraph - تابع أحدث الأخبار العاجلة والمتنوعة من لبنان والعالم. نحن نقدم لك تغطية شاملة لأهم الأحداث السياسية والاجتماعية والثقافية.
`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/d61bbd32-7e00-4c97-ab6e-830a55d2c430/426298383_862973212505626_547961837728015954_n.jpg" />

      </Head>
      <main className="bg4">
  <Navbar dark/>


   
      {post && post?._id &&
      
     <Grid sx={{py:4,px:1,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9} xl={8.25} item>
                    <Container  className='bg3 auto' sx={{py:2,height:'100%'}}>
      
                        <Box sx={{width:{xs:'100%'}}}>
                    {post?.isFeatured === true && post?.link ?
                    <Box>
             <YouTube videoId={getYouTubeId(`${post?.link}`)} opts={{
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }} />
                    </Box>
                    :

                    <Box sx={{mt:{xs:1,sm:2,lg:5},maxWidth:'md',
                      height:{xs:'100%',sm:'400px',md:'500px'}
                      }}>
                            <img src={post?.images[0]} alt="Blog Post Main Image" className="img" />
                        </Box>}
                        <Box >
                        Jan 20, 2023 • 0 comments
                        </Box>
                            <Typography component='h1' 
                            sx={{py:2,
                              color:'#2d4f62',  
                              direction: /[\u0600-\u06FF]/.test(post?.title) ? 'rtl' : 'ltr',
                              textAlign: /[\u0600-\u06FF]/.test(post?.title) ? 'right' : 'left',
                              fontWeight:800,fontSize:{xs:'2em',sm:'2.25em'}}}>
                         {post?.title}
                            </Typography>
                        </Box>
                       
                      
                                    {/* <Container  sx={{my:2}}>
            <Typography component='h2' sx={{pt:'0 !important'}} className='blog-h2' >
                          Article Summary:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                   
                                  {sectionTitleContents && sectionTitleContents.map((section:string)=>{
                                    return      <li key={`${section}`} style={{paddingBottom:'.5em'}}>
                                            <Link className='clr4' href={`#${`${section}`.replace(/\s/g , "-")}`}>
                                           {section}
                                            </Link>
                                            </li>
                                  })}
                                    </ul>
                        </Box>
            </Container> */}
{/* 
                        {selectedPost?.file?.map((post:{alt?:string,content:string | string[],type:string,src?:string}, index:number) => {
        if (post.type === 'sectionTitle') {
          return    <Typography  key={index} component='p' id={`${post?.content}`.replace(/\s/g , "-")} className={`blog-h1`} >
         {`${post.content}`}
          </Typography>
        }
        else if (post.type === 'paragraphArray' && Array.isArray(post.content)) {
         return     (

              post?.content?.map((para, index) : any => {
               return   <Typography key={index} sx={{py:1}} component='p' className='blog-p'>  {`${para}`}   </Typography>
              })
            )
     
        }
        else if (post.type === 'paragraph') {
          return (
            <Typography key={index} sx={{py:1}} component='p' className='blog-p'>
     
              {Array.isArray(post.content)
                ? post.content.map((item : any, i) => {
                    if (item.type === 'text') {
                      return item.content
                    } else if (item.type === 'link') {
                      return (
                        <a key={i} href={item.url}>
                          {item.content}
                        </a>
                      )
                    }
                  })
                :
           
                
              `${post.content}`}
              </Typography>
          )
        }
         else if (post.type === 'title') {
          return <h2 key={index}>{`${post.content}`}</h2>
        }  else if (post.type === 'image') {
          return  <Box key={post?.src}>
            <img className='img' key={index} src={post?.src} alt={post?.alt} />
          </Box>
        } else if (post.type === 'paragraphTitle') {
          return      <Typography  key={index} component='h2' className='blog-h3' >
        {`${post.content}`}
          </Typography>
          
       
        }
      })} */}

      <RenderText
      json={post?.description}
      />
                      
                    </Container>
                    
            </Grid>
            <Grid   className='auto'xs={12} md={4} lg={3} xl={3.5} item  sx={{maxWidth:'500px'}}>
          
            <Container className='bg3' disableGutters
             sx={{my:{xs:1,sm:0},py:2,px:1,mx:{md:1}}}>
              <Box className='flex row align-center gap2' sx={{mb:.25,width:'100%'}}>
                <Box sx={{width:'50px'}}>
                <img src="https://ucarecdn.com/620b779a-2991-457a-b2ed-664dcdbacad2/426693078_377420818337662_3520521881156974498_n.jpg" alt="" className="img rounded" />
                </Box>
                <Typography sx={{fontWeight:'600'}}>
                  NewsTelegraph
                </Typography>
              </Box>
                <Typography sx={{width:'100%',

                  alignItems:'right',
                  fontWeight:'600',
                  pt:2,
                  direction:'rtl',
                }}>
تابع الأخبار على وسائل التواصل الاجتماعي الخاصة بنا 
                </Typography>
              <SMicons invert/>
              <Box>
                {/* <Typography className='clr2' sx={{fontSize:'.9em'}}>
                    NewsTelegraph Blog Article
                </Typography> */}
              </Box>
            </Container>
            {/* <Container className='bg3' disableGutters sx={{my:{xs:1}, mx:{md:1},px:1,border:'1px solid'}}>
            <Typography component='h2' className='blog-h2' >
                            Invest in link building:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                   
                                  {sectionTitleContents && sectionTitleContents.map((section:string)=>{
                                    return      <li key={`${section}`} style={{paddingBottom:'.5em'}}>
                                            <Link className='clr4' href={`#${`${section}`.replace(/\s/g , "-")}`}>
                                           {section}
                                            </Link>
                                            </li>
                                  })}
                                    </ul>
                        </Box>
            </Container> */}
                
            </Grid>
        </Grid>
      }

      </main>
    </>
  )
}

