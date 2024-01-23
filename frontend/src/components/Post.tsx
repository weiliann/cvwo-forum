import '../App.css'
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import type { PostParams } from '../types/PostParams';
import { Box, Container, Stack, Typography } from '@mui/material';

// The head of the page
function Post(postData: PostParams) {
  const { author, title, category, body } = postData;
  return (
    <>
      <Container maxWidth="md" sx={{ mt:4, bgcolor: "gray", p:1, border: "1px solid black"}}>
        <Stack gap={1}>
          <Typography variant='body2'>Posted by {author}</Typography>
          <Typography variant='h2'>{title}</Typography>
          <Typography variant='body2' sx={{ bgcolor: "teal", width: "fit-content", p:"2px" }}>{category}</Typography>
          <Typography>{body}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: 1
            }}
          >
            <DeleteBtn />
            <EditBtn postData={postData}/>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Post;