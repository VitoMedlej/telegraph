// import BlogSections from '@/Components/Home/BlogSections'
// import Goal from '@/Components/Home/Goal'
// import Hero from '@/Components/Home/Hero'
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
import post1 from './blogArticle2.json'
import post2 from './article2.json'


export const postsArray = [
  {
      title : 'Start a Blog in 5 Easy Steps (do this before monetizing it)',
      date : 'Jan 20, 2023 ',
      img : 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id:1,
    tags: ['Web Development ','Tech','Web Design'] 
,
      file :post1 
  },
  {
    title : 'AI can replace you as a developer, unless you do this..',
    date : 'Sept 14, 2023 ',
    img : 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    id:2,
    file :post2,
    tags: ['Web Development ','Tech','AI','future'] 
},
{
  title : 'AI can replace you as a developer, unless you do this..',
  date : 'Sept 14, 2023 ',
  img : 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  id:3,
  tags: ['Web Development ','Tech','Web Design'] 
,
  file :post2
},
  
 
]

// const posts = [
//   {
//     type:'paragraphArray',
//     content : [`Have you considered starting a lifestyle blog, a niche blog, or a blog to promote your business but don't know where to begin?`,
//   `Worry not! With our plan and guide, starting a blog is so much easier! Today you will learn how to start blogging to achieve financial success in 2023.`,
//   `According to MillennialMoney, "It's pretty easy to make an extra $500–$2,000 per month blogging in your first year. And then in years 2, 3, 4, and 5, you can significantly increase your monthly blog revenue. Glassdoor reports that the average blogger's salary is over $50,000 per year, based on several anonymously submitted salaries."`,
//   `Everyone can make money blogging, everyone, including you. So get that doubt and fear out of your heart and read till the end, it is worth it. Now let's get started.`
//   ]
//   },
//   {
//     type: 'sectionTitle',
//     content: 'Step 1 - Get your own blog website'
//   },

//   {
//     type: 'paragraph',
//     content: [
//       {
//         type: 'text',
//         content: `Fortunately, you have unlimited options to choose from in order to create your own blog, some of which are completely free. You can use blogging platforms such as 
//          `
//       },
//       {
//         type: 'link',
//         content: 'Blogger',
//         url: 'https://blogger.com/'
//       },
//       {
//         type: 'text',
//         content: ` and enjoy free, unlimited hosting and a safe blogging system. Although I would not recommend it since it puts you at a huge disadvantage, for example, they can delete your blog anytime they want, and you won't build website authority. And the worst of all is that you can't monetize it.`
//       }
//     ]
//   },
//   {
//     type: 'paragraph',
//     content: [
//       {
//         type: 'text',
//         content :`What I would suggest instead is to use something popular like `,
//       },
//       {
//         type: 'link',
//         content: 'Wordpress',
//         url: 'https://wordpress.com/'
//       },
//       {
//         type: 'text',
//         content: `.Wordpress is super user-friendly and really flexible, plus it offers great & free themes and plugins. Similarly, it is not perfect either. Hand coded website on the otherhand are by far the most effective.`
//       }
//     ]
//   },
//   {
//     type: 'paragraph',
//     content: `Hand-coding makes a blog unique and original because it can be built based on the user's preferences in the design and overall functionality of the web page. Plus you are in full control of the website.` 

//   },
//   {
//     type: 'paragraph',
//     content: [
//       {
//         type: 'text',
//         content :`Most people rely on using builders when starting their blog. Meanwhile, those who are serious about it will craft their website from scratch through hand-coding. But if you can't, you can always rely on us to `,
//       },
//       {
//         type: 'link',
//         content: 'build you a blog.',
//         url: 'https://onbeirut.com/contact'
//       },
  
//     ]
//   },
//   {
//     type: 'sectionTitle',
//     content: 'Step 2 - Pick your blog name and niche'
//   }, 
//   {
//     type : 'paragraphArray',
//     content : [`My blog is ready; what now? it's time for you to pick a name and a niche.`, `The name is extremely important since this is your brand. It's how people will remember you.`]
//   },
//   {
//     type: 'paragraph',
//     content: [
//       {
//         type: 'text',
//         content :`Even if you are building a personal blog, which by the way is great since people connect with you more than a corporate one (according to the genius `,
//       },
//       {
//         type: 'link',
//         content: ' Neil Patel).',
//         url: 'https://neilpatel.com/'
//       },
  
//     ]
//   },
//   {
//     type : 'paragraphArray',
//     content : [`Grab a pen and a piece of paper and begin brainstorming; write down your interests and what you'd like to talk about; eventually, you'll come up with topics that spark your interest. Remember to keep the name simple and easy to remember for your visitors.`,
    
//     `After you have decided one or two names, you must check if those names are available as domains. A domain is where your blog is located on the web. For example "yourblog.com".`,`Choose a .com domain if possible. Never use numbers and try to avoid sophisticated and commonly misspelled words.`,`A niche or topic can be anything you like as long as it is not too broad or too specific. You can use an online topic generator.`,`Pick any blog topic like travel, food, fashion, lifestyle, technology, and otherwise. Also incorporating a word that clearly signals what your content is about, within the name of your blog, for example, "jamesfashion.com" will be very helpful for your future blog readers. But do not stress if you cannot come up with one.`]
//   },
//   {
//     type: 'sectionTitle',
//     content: 'Step 3 - Write Your First Blog Post'
//   },
//   {
//     type:'paragraphArray',
//     content : [`Once you have your blog setup, the only thing missing is the awesome articles. While the UI design and layout are fun and important, it's what you write that will draw your readers in and keep them coming back. So how do you actually go about writing one of these engaging and informative pieces?`,
//   `Before starting, answer basic questions like, "Why would someone keep reading this entire blog post?" and "What makes our audience come back for more?"`,
// `Keep your first blog post simple, and do not challenge major competitors or more established brands right away by choosing a general and highly searched topic. It is highly unlikely that your post will rank higher than theirs.`,
// `A few tips to consider when you write your first blog post:`]
//   },
//   {
//     type: 'paragraphTitle',
//     content: "1- Choose a topic you’re passionate and knowledgeable about"
//   },
//   {
//     type: 'paragraphTitle',
//     content: "2- Aim for low-volume keywords (10-200 monthly searches)"
//   },
//   {
//     type: 'paragraphTitle',
//     content: "3- Make sure you choose attractive and catchy titles"
//   },
//   {
//     type: 'paragraphTitle',
//     content: "4- Use short sentences and paragraphs instead of giant chunks"
//   },
//   {
//     type: 'paragraphTitle',
//     content: "5- Keep the language simple and clear"
//   }
// ,
//   {
//     type: 'paragraph',
//     content: [
//       {
//         type: 'text',
//         content :
//         `
//   After finishing up your post, search closely for grammatical errors,
//    I personally use  
//         `
//       },
//       {
//         type: 'link',
//         content: 'grammarcheck',
//         url: 'https://grammarcheck.net/'
//       },
//       {
//         type:'text',
//         content:`for this mission. Do not worry as long as your sentences make sense, 
//         your punctuation is in the right place and the paragraphs read well out loud, you’re good to go.`
//       }
  
//     ]
//   },
//   {
//     type: 'sectionTitle',
//     content: 'Step 4 - Publish and promote your first blog post any way you can'
//   },
 

//   {
//     type : 'paragraphArray',
//     content : [`You just started blogging and most likely don’t have a social media following yet. Thankfully, you don’t need a huge following before you can create a promotion strategy.`,
//               `Before you start promoting, it is an absolute must to set up tracking tools like Google Analytics. Also consider testing the blog, for example, test your social media buttons, optimize the web page, conduct a technical website audit... All these steps are vital to ensure maximum efficiency.`,
//               `With the right blog promotion strategy, you can nurture relationships, build your brand, and ultimately start earning money from monetizing your blog.`,
//               'Here are 3 easy steps you can take to help you promote your blog and increase traffic.',
//               `Best strategies to promote your blog:`
//   ]
//   },
//   {
//     type: 'paragraphTitle',
//     content: "Use social media to spread the word."
//   },
  
//   {type:'paragraph', content:'Don’t underestimate the value of social media platforms to increase blog traffic. Share your new blog post on multiple social media sites. Use hashtags to label content and help the right people find it. Consider including an eye-catching image or video, especially on more visual platforms like Instagram. Images are often strong drivers to make social media users stop and read a post. Over time, you’ll get a feel for which social media channels are geared toward your niche, so you can put your focus on those sites. Include a link to your blog on all of your social media accounts. This simple step makes it easy for visitors to catch up on older posts and maybe even share content on their own social media profiles.'}


// ,
//   {
//     type: 'paragraphTitle',
//     content: "Write blog posts frequently"
//   },
  
//   {type:'paragraph', content:`It's not enough to appear once or twice, then vanish, only to reappear ten years later. Stay relevant in the business with new content, write fresh blog posts everyday. Just by showing your readers your commitment to providing the most useful information, you add value to your blog.

//   Use a content calendar to stay on top of blog posts. Include upcoming blog posts, status updates, and planned promotions. Design your own template or consider choosing from several online templates to help plan your frequency.`}
// ,
//   {
//     type: 'paragraphTitle',
//     content: "Invest in link building"
//   },
  
//   {type:'paragraph', content:`Search engines reward link building, which is a valuable strategy for promoting blogs. Inbound links (also known as backlinks) often help boost traffic and build credibility with your target audience.

//   The main way to incorporate this tactic is by creating great content that inspires sharing. Make your blog easy to read and include helpful or newsworthy information that readers will value.
  
//   Also, think about including links to related topics of interest at the end of your blog. This gives readers easy access to more reading material on your site. You can identify your most popular blog posts and tweak the content to make a new post, adding a link from the original.`}
// ,

//   {
//     type: 'sectionTitle',
//     content: 'Step 5 - Learn Marketing Before Monetizing (important).'
//   },
//   {
//     type: 'image',
//     src: 'https://kinsta.com/wp-content/uploads/2019/04/how-to-monetize-a-blog.png',
//     alt: 'An example image'
//   },
//   {
//     type: 'paragraphArray',
//     content: [
//       "After consistently posting on your blog, you'd think earning a fortune and monetizing should be straightforward. Unfortunately, it is not, but I am here to tell you what you need to know.",
//       "Sometimes it is very hard to monetize the traffic that you do receive. Why? simply because you most likely know little to nothing about online marketing.",
//       "Here's the thing; significant progress cannot be made on the web without a clear understanding of what online marketing is and what it isn’t. Thus, learning at least the fundamentals is crucial; otherwise, once traffic arrives and you don't know what to do with it, your efforts will be largely wasted.",
//       "So what should you do? While building and growing your blog, you have to focus on learning online marketing simultaneously. This includes Search Engine Optimization (SEO), which is one of the most important segments of online marketing, as well as Search Engine Marketing (SEM) and Content Marketing and many other aspects of online marketing.",
//       "Only then will you be able to begin selling advertising spaces on your blog. This could be anything from selling physical products to ebooks to Email marketing etc...",
//       "A very popular method for monetizing a blog is to leverage affiliate marketing. When you are starting out, this is really useful since you don't have your own products or services to sell. All you have to do is develop content that will ultimately be in harmony with whatever affiliate offers you plan to push out.",
//       "If your blog is about fitness and bodybuilding, for example, you can easily sell affiliate health, weight loss, or bodybuilding supplements. Combining your online marketing knowledge that you've been learning with the traffic from your blog will surely pay off and be worth it."
//     ]
//   },
//   {
//     type: 'sectionTitle',
//     content: "Conclusion"
//   },
//   {
//     type: 'paragraphArray',
//     content: [
//       "Building a simple, nice blog is easy and straightforward, but building a blog that reaches a large number of readers and generates an income requires effort and years of consistency.",
//       "Fortunately, running a blog can be 100% free if you want it to be, but don't hesitate to pay a bit if needed; eventually you will get your money back doubled.",
//       "You need two things to make a successful blog: a deep, burning desire to learn the fundamentals and basics of necessary topics like online marketing, and the passion for blogging in order to consistently create great content.",
//       "Why are you hesitating to start? Please leave a comment, and I will surely respond."
//     ]
//   }
// ];




export default function Index() {
  const router = useRouter()
  const {id} = router.query
  
  // let selectedPost = postsArray[0].file
  let filteredPost = postsArray.filter(i=> {return Number(i.id) == Number(id)})
  console.log('filteredPost: ', filteredPost);
  // selectedPost = selectedPost ? selectedPost.file : null
  const selectedPost = filteredPost ? filteredPost[0]?.file : null;
  console.log('selectedPost: ', selectedPost);
  const sectionTitleContents =   selectedPost ? selectedPost
  .filter(item => item.type === 'sectionTitle')
  .map(item => `${item?.content}`?.length > 0 && `${item.content}`) : null;
  
  return (
    <>
      <Head>
        <title>OnBeirut Software Development Agency | Lebanon </title>
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

      {selectedPost &&
      
     <Grid sx={{py:4,px:1,maxWidth:'lg'}} className=' auto' container>
            <Grid  xs={12} md={8} lg={9.25}  item>
                    <Container  className='bg3 auto' sx={{py:2,border:'1px solid',height:'100%'}}>
      
                        <Box>
                            <Typography component='h1' sx={{py:2,fontWeight:800,fontSize:{xs:'2em'}}}>
                         {filteredPost[0]?.title}
                            </Typography>
                        </Box>
                        <Box sx={{borderBottom:'1px solid'}}>
                        Jan 20, 2023 • 0 comments
                        </Box>
                        <Box sx={{mt:{xs:1,sm:2,lg:5},maxWidth:'md'}}>
                            <img src={filteredPost[0].img} alt="Blog Post Main Image" className="img" />
                        </Box>
                                    <Container  sx={{my:2}}>
            <Typography component='h2' sx={{pt:'0 !important'}} className='blog-h2' >
                          Article Summary:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                   
                                  {sectionTitleContents && sectionTitleContents.map(section=>{
                                    return      <li key={`${section}`} style={{paddingBottom:'.5em'}}>
                                            <Link className='clr4' href={`#${`${section}`.replace(/\s/g , "-")}`}>
                                           {section}
                                            </Link>
                                            </li>
                                  })}
                                    </ul>
                        </Box>
            </Container>
                        {/* <Box>
                            <Typography className='blog-p' component='p'>
                            Everyone can make money blogging, everyone, including you. So get that doubt and fear out of your heart and read till the end, it is worth it. Now let&apos;s get started.
                            </Typography>
                              
                        </Box> */}
                        {/* <Box sx={{p:1.5}}>
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
                        </Box> */}

                        {selectedPost.map((post, index) => {
        if (post.type === 'sectionTitle') {
          return    <Typography  key={index} component='h1' id={`${post?.content}`.replace(/\s/g , "-")} className={`blog-h1`} >
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
      })}
                      
                    </Container>
                    
            </Grid>
            <Grid   className='auto'xs={12} md={4} lg={2.75} xl={3} item  sx={{maxWidth:'sm'}}>
          
            <Container className='bg3' disableGutters sx={{my:{xs:1,sm:0},py:2,px:1,mx:{md:1},border:'1px solid'}}>
              <Box className='flex row align-center gap2' sx={{mb:.25,width:'100%'}}>
                <Box sx={{width:'50px'}}>
                <img src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:60/h:60/q:90/dpr:1.1/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/09/john-h-1.png" alt="" className="img rounded" />
                </Box>
                <Typography sx={{fontWeight:'600'}}>
                  Admin 
                </Typography>
              </Box>
              <Box>
                <Typography className='clr2' sx={{fontSize:'.9em'}}>
                    OnBeirut Blog Article
                </Typography>
              </Box>
            </Container>
            <Container className='bg3' disableGutters sx={{my:{xs:1}, mx:{md:1},px:1,border:'1px solid'}}>
            <Typography component='h2' className='blog-h2' >
                            Invest in link building:
                            </Typography>
                            <Box sx={{width:'100%'}}>
                                    <ul className='table'>
                                   
                                  {sectionTitleContents && sectionTitleContents.map(section=>{
                                    return      <li key={`${section}`} style={{paddingBottom:'.5em'}}>
                                            <Link className='clr4' href={`#${`${section}`.replace(/\s/g , "-")}`}>
                                           {section}
                                            </Link>
                                            </li>
                                  })}
                                    </ul>
                        </Box>
            </Container>
                
            </Grid>
        </Grid>
      }

      </main>
    </>
  )
}
