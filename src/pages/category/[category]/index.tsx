import BlogSections from '@/Components/Home/BlogSections';
import Navbar from '@/Navbar/Navbar';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Post = {
  _id: string;
  title: string;
  content: string;
};

const Page = () => {
  const router = useRouter();
  const { category } = router.query;

  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (reset: boolean = false) => {
    if (loading || !hasMore) return; // Prevent fetching while loading or if no more posts
    setLoading(true);

    try {
      const res = await fetch(`/api/get-data?page=${page}&limit=12&category=${category || ''}`);
      const data = await res.json();
      const content = data?.data?.featuredProducts || [];

      if (data.success && content.length > 0) {
        setPosts((prevPosts) => reset ? content : [...prevPosts, ...content]); // Replace or append posts
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); // No more posts to fetch
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch when the category changes
  useEffect(() => {
    if (category) {
      setPosts([]); // Clear posts
      setPage(1); // Reset page to 1
      setHasMore(true); // Allow more fetching
      fetchPosts(true); // Fetch posts for the new category
    }
  }, [category]); // Re-run effect when the category changes

  return (
    <Box>
      <Navbar />
      {category && (
        <Box sx={{ minHeight: '50vh', px: 1, py: 8, background: 'white' }}>
          {posts?.length > 0 && (
            <BlogSections
              title={category}
              fetchPosts={() => fetchPosts()} // Load more posts on demand
              posts={posts}
            />
          )}
          {loading && (
            <Box sx={{ minHeight: '50vh', px: 1, py: 8, background: 'white' }}>
              Loading posts...
            </Box>
          )}
          {!loading && posts?.length === 0 && (
            <Box>
              No posts found for this specific category...
              <Link href="/">return home</Link>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Page;
