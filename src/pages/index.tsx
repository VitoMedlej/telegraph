"use client"
import BlogSections from '@/Components/Home/BlogSections'
import Hero from '@/Components/Home/Hero'
import Navbar from '@/Navbar/Navbar'
import { Box } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react';


type Post = {
  _id: string;
  title: string;
  content: string;
  // Add other fields you need
};

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/get-data?page=${page}&limit=12`);
      const data = await res.json();
      const content = data?.data?.featuredProducts;
      console.log('content: ', content);

      if (data.success && content) {
        setPosts((prevPosts) => {
          const newPosts = content.filter((post:any) => !prevPosts.some(p => p._id === post._id));
          return [...prevPosts, ...newPosts];
        });
        setPage(page + 1);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initially load the first 12 posts
  useEffect(() => {

    fetchPosts(); // This should only run once
  }, []);


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

        <meta property="og:image" content="https://ucarecdn.com/46393bac-42e6-4c08-aed5-9fa3ac22663f/image.jpg" />
    <meta property="og:url" content="www.NewsTelegraph.com" />
    <meta name="twitter:card" content="https://ucarecdn.com/46393bac-42e6-4c08-aed5-9fa3ac22663f/image.jpg" />
    <meta name="twitter:title" content="NewsTelegraph | Empowering Lebanese Businesses with Software" />
    <meta name="twitter:image" content="https://ucarecdn.com/46393bac-42e6-4c08-aed5-9fa3ac22663f/image.jpg" />
      </Head>
      <main>
        <Box className='hero-img' >

  <Navbar/>
  <Hero blog={true} 
      
        desc={''}
        imgsm={'https://ucarecdn.com/dcd042d6-edbb-4fa5-bea3-c9be977ef041/Greyminimalistbusinessprojectpresentation.jpg'}
        title={'Expand Your Knowledge'} imgmd={`https://ucarecdn.com/dcd042d6-edbb-4fa5-bea3-c9be977ef041/Greyminimalistbusinessprojectpresentation.jpg`}/>
        </Box>
        <BlogSections
          fetchPosts={fetchPosts}
          posts={posts}
        />
      </main>
    </>
  )
}
