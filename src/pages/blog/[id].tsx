import BlogSections from '@/Components/Home/BlogSections'
// import Goal from '@/Components/Home/Goal'
import Hero from '@/Components/Home/Hero'
// import Plans from '@/Components/Home/Plans'
// import Portfolio from '@/Components/Home/Portfolio'
// import Services from '@/Components/Home/Services'
// import Teaser from '@/Components/Home/Teaser'
// import VerticalCarousel from '@/Components/Home/VerticalCarousel/VerticalCarousel'
import Navbar from '@/Navbar/Navbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'



const posts = [
  {
    type: 'sectionTitle',
    content: 'Step 1 - Get your own blog website'
  },
  // {
  //   type: 'title',
  //   content: 'Post 1'
  // },
  {
    type: 'image',
    src: 'https://www.example.com/image.jpg',
    alt: 'An example image'
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'text',
        content: `Fortunately, you have unlimited options to choose from in order to create your own blog, some of which are completely free. You can use blogging platforms such as 
         `
      },
      {
        type: 'link',
        content: 'Blogger',
        url: 'https://blogger.com/'
      },
      {
        type: 'text',
        content: ` and enjoy free, unlimited hosting and a safe blogging system. Although I would not recommend it since it puts you at a huge disadvantage, for example, they can delete your blog anytime they want, and you won't build website authority. And the worst of all is that you can't monetize it.`
      }
    ]
  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'text',
        content :`What I would suggest instead is to use something popular like `,
      },
      {
        type: 'link',
        content: 'Wordpress',
        url: 'https://wordpress.com/'
      },
      {
        type: 'text',
        content: `.Wordpress is super user-friendly and really flexible, plus it offers great & free themes and plugins. Similarly, it is not perfect either. Hand coded website on the otherhand are by far the most effective.`
      }
    ]
  },
  {
    type: 'paragraph',
    content: `Hand-coding makes a blog unique and original because it can be built based on the user's preferences in the design and overall functionality of the web page. Plus you are in full control of the website.` 
    

  },
  {
    type: 'paragraph',
    content: [
      {
        type: 'text',
        content :`Most people rely on using builders when starting their blog. Meanwhile, those who are serious about it will craft their website from scratch through hand-coding. But if you can't, you can always rely on us to `,
      },
      {
        type: 'link',
        content: 'build you a blog.',
        url: 'https://onbeirut.com/contact'
      },
  
    ]
  },



  {
    type: 'sectionTitle',
    content: 'Step 2 - Pick your blog name and niche'
  },

  {
    type: 'paragraph',
    content: `My blog is ready; what now? it's time for you to pick a name and a niche.`
  }
  ,
  {
    type: 'paragraph',
    content: `The name is extremely important since this is your brand. It's how people will remember you.

    `
  }
  ,

  {
    type: 'paragraphTitle',
    content: 'Subheading'
  },


];


export default function Index() {
  const router = useRouter();

  
  return (
    <>
      <Head>
        <title>OnBeirut Software Development Agency | Developers In Lebanon </title>
        <meta name="description" content={`
     Looking for a top software development agency in Lebanon? Look no further than OnBeirut. Our skilled developers deliver high-quality web and mobile solutions.
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ucarecdn.com/f6c61100-9146-483f-af5b-4d3809c48c99/favicon.JPG" />

      </Head>
      <main className="bg4">
  <Navbar dark/>


    {/* <Grid sx={{py:4,px:1,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9} item>
                    <Container  className='bg3 auto' sx={{py:2,border:'1px solid',height:'100%'}}>
                        <Box>
                            <Typography component='h1' sx={{py:2,fontWeight:800,fontSize:{xs:'2em'}}}>
                            Start a Blog in 5 Easy Steps (do this before monetizing it)
                            </Typography>
                        </Box>
                        <Box sx={{borderBottom:'1px solid'}}>
                        Jan 20, 2023 • 0 comments
                        </Box>
                        <Box sx={{my:{lg:5},maxWidth:'md'}}>
                            <img src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post Main Image" className="img" />
                        </Box>
                        <Box>
                            <Typography className='blog-p' component='p'>
                            Everyone can make money blogging, everyone, including you. So get that doubt and fear out of your heart and read till the end, it is worth it. Now let's get started.
                            </Typography>
                              
                        </Box>
                        <Box sx={{p:1.5}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>

                                            Step 1 - Get your own blog website

                                            </Link>
                                            </li>
                                            <li>
                                            <Link className='clr4' href='/'>
                                            Step 2 - Pick your blog name and niche
                                            </Link>
                                            </li>
                                    
                                    </ul>
                        </Box>
                        <Box >
                            <Typography component='h1' className='blog-h1' >
                            Step 1 - Get your own blog website
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 1 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                            <Typography component='h2' className='blog-h2' >
                            Invest in link building
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 1 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                        </Box>
                    </Container>
                    
            </Grid>
            <Grid xs={12} md={4} lg={3} item  sx={{maxWidth:'sm'}}>
            <Grid>
                
            </Grid>
            <Grid className='auto'>
            <Container className='bg3' disableGutters sx={{py:2,px:1,mb:1}}>
              <Box className='flex row align-center gap2' sx={{mb:.25,width:'100%'}}>
                <Box sx={{width:'50px'}}>
                <img src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:60/h:60/q:90/dpr:1.1/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/09/john-h-1.png" alt="" className="img rounded" />
                </Box>
                <Typography sx={{fontWeight:'600'}}>
                Vito Medlej
                </Typography>
              </Box>
              <Box>
                <Typography className='clr2' sx={{fontSize:'.9em'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita nam eum id voluptates dicta.
                </Typography>
              </Box>
            </Container>
            <Container className='bg3' sx={{}}>
            <Typography component='h2' className='blog-h2' >
                            Invest in link building:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>
                                            Step 1 - Get your own blog website
                                            </Link>
                                            </li>
                                    </ul>
                        </Box>
            </Container>
                
            </Grid>
            </Grid>
        </Grid> */}


     <Grid sx={{py:4,px:1,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9.5}  item>
                    <Container  className='bg3 auto' sx={{py:2,border:'1px solid',height:'100%'}}>
      
                        <Box>
                            <Typography component='h1' sx={{py:2,fontWeight:800,fontSize:{xs:'2em'}}}>
                            Start a Blog in 5 Easy Steps (do this before monetizing it)
                            </Typography>
                        </Box>
                        <Box sx={{borderBottom:'1px solid'}}>
                        Jan 20, 2023 • 0 comments
                        </Box>
                        <Box sx={{my:{lg:5},maxWidth:'md'}}>
                            <img src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Post Main Image" className="img" />
                        </Box>
                        <Box>
                            <Typography className='blog-p' component='p'>
                            Everyone can make money blogging, everyone, including you. So get that doubt and fear out of your heart and read till the end, it is worth it. Now let&apos;s get started.
                            </Typography>
                              
                        </Box>
                        <Box sx={{p:1.5}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>

                                            Step 55- Get your own blog website

                                            </Link>
                                            </li>
                                            <li>
                                            <Link className='clr4' href='/'>
                                            Step 33 - Pick your blog name and niche
                                            </Link>
                                            </li>
                                    
                                    </ul>
                        </Box>

                        {posts.map((post, index) => {
        if (post.type === 'sectionTitle') {
          return    <Typography key={index} component='h1' className='blog-h1' >
         {`${post.content}`}
          </Typography>
        }
        else if (post.type === 'paragraph') {
          return (
            <Typography key={index} sx={{py:1}} component='p' className='blog-p'>
     
              {Array.isArray(post.content)
                ? post.content.map((item, i) => {
                    if (item.type === 'text') {
                      return item.content;
                    } else if (item.type === 'link') {
                      return (
                        <a key={i} href={item.url}>
                          {item.content}
                        </a>
                      );
                    }
                  })
                :
           
                
              `${post.content}`}
              </Typography>
          );
        }
         else if (post.type === 'title') {
          return <h2 key={index}>{`${post.content}`}</h2>;
        }  else if (post.type === 'image') {
          return <img key={index} src={post.src} alt={post.alt} />;
        } else if (post.type === 'paragraphTitle') {
          return      <Typography  key={index} component='h2' className='blog-h2' >
        {`${post.content}`}
          </Typography>
          
       
        }
      })}
                        {/* <Box >
                            <Typography component='h1' className='blog-h1' >
                            Step 2323 - Get your own blog website
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 14 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                            <Typography component='h2' className='blog-h2' >
                            Invest in link building
                            </Typography>
                            <Typography component='p' className='blog-p'>
                            Step 155 - Get your own blog website Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quo!
                            </Typography>
                        </Box> */}
                    </Container>
                    
            </Grid>
            <Grid xs={12} md={4} lg={2.5} item  sx={{maxWidth:'sm'}}>
            <Grid>
                
            </Grid>
            <Grid className='auto'>
            <Container className='bg3' disableGutters sx={{py:2,px:1,mb:1}}>
              <Box className='flex row align-center gap2' sx={{mb:.25,width:'100%'}}>
                <Box sx={{width:'50px'}}>
                <img src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:60/h:60/q:90/dpr:1.1/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/09/john-h-1.png" alt="" className="img rounded" />
                </Box>
                <Typography sx={{fontWeight:'600'}}>
                Vito Medlej
                </Typography>
              </Box>
              <Box>
                <Typography className='clr2' sx={{fontSize:'.9em'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita nam eum id voluptates dicta.
                </Typography>
              </Box>
            </Container>
            <Container className='bg3' sx={{}}>
            <Typography component='h2' className='blog-h2' >
                            Invest in link building:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                        <li>
                                            <Link className='clr4' href='/'>
                                            Step 112421 - Get your own blog website
                                            </Link>
                                            </li>
                                    </ul>
                        </Box>
            </Container>
                
            </Grid>
            </Grid>
        </Grid>

        {/* Under development... */}

      </main>
    </>
  )
}
