// src/Posts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from './TripCard';
import { Box, Container, Pagination, Typography  } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 2;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/post/allPosts?page=${page - 1}&size=${pageSize}`);;
        setPosts(response.data.content);
        setTotalPages(response.data.totalPages);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [page]);

    const handleChangePage = (event, value) => {
    setPage(value);
    };

  return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <TripCard key={post.id} data={post} />
                ))
              ) : (
                <Typography variant="h6">No posts available</Typography>
              )}
            </Box>
            <Box display="flex" justifyContent="center" marginTop={4}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary"
                size="large"
              />
            </Box>
          </Container>
//     <Container>
//       <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
//         {posts.map((post) => (
//           <TripCard key={post.id} data={post} />
//         ))}
//       </Box>
//     </Container>
  );
};

export default Posts;
