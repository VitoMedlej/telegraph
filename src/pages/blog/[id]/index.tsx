import RenderText from '@/Components/RenderText/RenderText'
import ShareIcons from '@/Components/ShareIcons/ShareIcons'
import { getYouTubeId } from '@/Components/YoutubeThumbail/YoutubeThumbnail'
import Navbar from '@/Navbar/Navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import YouTube from 'react-youtube';

// Your existing helper functions
const extractTextFromJson = (jsonString: string): string | null => {
  try {
    if (!jsonString) return null;
    const data = JSON.parse(jsonString);
    if (data.blocks && data.blocks.length > 0 && data.blocks[0]?.text) {
      return `${data.blocks[0].text?.slice(0, 140)}`;
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
  return null;
};

const fetchPostById = async (id: string) => {
  const res = await fetch(`https://yourapi.com/api/get-by-id?id=${id}`);
  const data = await res.json();
  return data?.data?.post;
};

// Fetch data server-side
export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const post = await fetchPostById(id);

  return {
    props: {
      post,
    },
  };
};

export default function Index({ post }: any) {
  return (
    <>
      <Head>
        <title>{post?.title || "أخبار لبنان والعالم - News Telegraph"}</title>
        <meta
          name="description"
          content={extractTextFromJson(post?.description) || "News Telegraph - تابع أحدث الأخبار العاجلة والمتنوعة من لبنان والعالم."}
        />
        <meta property="og:title" content={post?.title || "أخبار لبنان والعالم - News Telegraph"} />
        <meta
          property="og:description"
          content={extractTextFromJson(post?.description) || "News Telegraph - تابع أحدث الأخبار العاجلة والمتنوعة من لبنان والعالم."}
        />
        <meta property="og:image" content="https://ucarecdn.com/d61bbd32-7e00-4c97-ab6e-830a55d2c430/426298383_862973212505626_547961837728015954_n.jpg" />
        <meta property="og:url" content={`https://newstelegraph.net/${post?._id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title || "أخبار لبنان والعالم - News Telegraph"} />
        <meta
          name="twitter:description"
          content={extractTextFromJson(post?.description) || "News Telegraph - تابع أحدث الأخبار العاجلة والمتنوعة من لبنان والعالم."}
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/d61bbd32-7e00-4c97-ab6e-830a55d2c430/426298383_862973212505626_547961837728015954_n.jpg"
        />
      </Head>
      <main className="bg4">
  <Navbar dark/>


   
      {post && post?._id &&
      
     <Grid sx={{py:4,px:1,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9} xl={8.25} item>
                    <Container  className='bg3 auto' sx={{py:2,height:'100%'}}>
      
                    <Box sx={{pb:1}} >
                        {post?.dateAdded} • {post?.category}
                        </Box>
                        <Box sx={{width:{xs:'100%'}}}>
                    {post?.isFeatured === true && post?.link ?
                    <Box>
             <YouTube videoId={`${getYouTubeId(`${post?.link}`)}`} opts={{
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
                     {post?.alt &&   <Box>
                          <Typography sx={{fontSize:'.8em',fontWeight:400}}>
                            {`${post?.alt}`?.length > 0 ? post?.alt : ''}
                          </Typography>
                        </Box>}
                      
                            <Typography component='h1' 
                            sx={{py:2,
                              color:'#2d4f62',  
                              direction: /[\u0600-\u06FF]/.test(post?.title) ? 'rtl' : 'ltr',
                              textAlign: /[\u0600-\u06FF]/.test(post?.title) ? 'right' : 'left',
                              fontWeight:800,fontSize:{xs:'2em',sm:'2.25em'}}}>
                         {post?.title}
                            </Typography>
                        </Box>
                       
                      
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
              <ShareIcons  invert/>
              <Box>
              
              </Box>
            </Container>
                
            </Grid>
        </Grid>
      }

      </main>
    </>
  );
}
