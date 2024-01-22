import { useLoaderData } from "react-router-dom"
import PostResponse from "./types/PostResponse";
import PostCard from "./components/PostCard"
import "./App.css"
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Box, Container, Stack, TextField } from "@mui/material";

export default function App() {
  const allPosts = useLoaderData() as PostResponse[];
  const [searchCategory, setSearchCategory] = useState('');
  return (
    <>
      <NavBar />
      <Box sx={{ mt: 3 }}>
        <Container sx={{ p: 7 }}>
          <TextField
            variant="outlined"
            type="text"
            placeholder="filter category"
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
            sx={{ display: 'block', width: '30%', margin: '3rem auto' }}
          />
          <Stack spacing={2}>
            {allPosts.filter(post => post.category.includes(searchCategory))
              .map(post => (
                <PostCard key={post.id} post_id={post.id} title={post.title} name={post.user.name} />
              ))}
          </Stack>
        </Container>
      </Box>
    </>
  )
}
