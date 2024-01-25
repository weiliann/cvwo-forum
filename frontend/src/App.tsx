import { useLoaderData } from "react-router-dom"
import PostResponse from "./types/PostResponse";
import PostCard from "./components/PostCard"
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Box, Container, Stack, TextField, ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function App() {
  const allPosts = useLoaderData() as PostResponse[];
  const [searchCategory, setSearchCategory] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box >
        <Container maxWidth="md" sx={{ p: 7, mt: 0 }}>
          <TextField
            variant="outlined"
            type="text"
            placeholder="filter by category"
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
            sx={{ display: 'block', width: '30%', margin: "0 auto 3rem auto" }}
          />
          <Stack spacing={2}>
            {allPosts.filter(post => post.category.includes(searchCategory))
              .map(post => (
                <PostCard
                  key={post.id}
                  post_id={post.id}
                  title={post.title}
                  name={post.user.name}
                  category={post.category}
                  body={post.body}
                />
              ))}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
