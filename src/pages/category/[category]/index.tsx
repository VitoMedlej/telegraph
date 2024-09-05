import BlogSections from '@/Components/Home/BlogSections'
import Navbar from '@/Navbar/Navbar'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



type Post = {
    _id: string;
    title: string;
    content: string;
  };

const Page = () => {
    const router = useRouter()
    const { category } = router.query;

    
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/get-data?page=${page}&limit=12&category=${category}`);
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
  
    if (loading) return <Box className='center flex auto' sx={{height:'100vh'}}>Loading..</Box>
  return (
    <Box >
        <Navbar/>
      {category &&   <Box sx={{minHeight:'50vh',px:1,py:8,background:"white"}}>
                  
         {posts?.length > 0 &&           <BlogSections
                    title={category}
          fetchPosts={fetchPosts}
          posts={posts}
        />}
        {
            !loading && posts?.length == 0 && <Box>
No posts found for this specific category..
            <Link href='/'>return home</Link>
            </Box>
        }
        </Box>}
    </Box>
  )
}

export default Page