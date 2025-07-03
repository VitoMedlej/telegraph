import BlogSections from '@/Components/Home/BlogSections';
import Navbar from '@/Navbar/Navbar';
import { Box } from '@mui/material';
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
  const [hasMore, setHasMore] = useState(true); // Track if there are more posts

  // Reset posts and page when category changes
  useEffect(() => {
    if (category) {
      // When category changes, reset all state
      setPosts([]);       // Clear posts
      setPage(1);         // Reset page number to 1
      setHasMore(true);   // Allow pagination again
      fetchPosts(true);   // Fetch new category posts, force reset
    }
  }, [category]);

  const fetchPosts = async (reset: boolean = false) => {
    if (loading) return;  // Prevent fetching while already loading

    setLoading(true);
    try {
      const currentPage = reset ? 1 : page;
      const res = await fetch(`/api/get-data?page=${currentPage}&limit=24&category=${category || ''}`);
      const data = await res.json();
      const content = data?.data?.featuredProducts || [];

      if (data.success && content.length > 0) {
        setPosts((prevPosts) => (reset ? content : [...prevPosts, ...content])); // Reset or append posts
        setPage((prevPage) => reset ? 2 : prevPage + 1);  // Set page for next fetch
        
        // If we got less than 24 posts, we've reached the end
        if (content.length < 24) {
          setHasMore(false);
        }
      } else if (reset) {
        setPosts([]);  // If reset and no posts, ensure empty state
        setHasMore(false); // Disable further pagination
      } else {
        setHasMore(false); // No more posts to fetch
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);  // Ensure loading state is turned off
    }
  };

  return (
    <Box>
      <Navbar />
      {category && (
        <Box sx={{ minHeight: '50vh', px: 1, py: 8, background: 'white' }}>
          {posts.length > 0 && (
            <BlogSections
              title={category}
              fetchPosts={() => fetchPosts(false)}
              posts={posts}
              loading={loading}
              hasMore={hasMore}
            />
          )}
          {loading && (
            <Box sx={{ minHeight: '50vh', px: 1, py: 8, background: 'white' }}>
              Loading posts...
            </Box>
          )}
          {!loading && posts.length === 0 && (
            <Box>
              No posts found for this specific category...
              <Link href="/">Return home</Link>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Page;
