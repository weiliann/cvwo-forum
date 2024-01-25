import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import type { PostParams } from '../../types/PostParams';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

// The post content
function Post(postData: PostParams) {
  const session_id = sessionStorage.getItem("user_id");
  const cur_user_id = session_id ? parseInt(session_id, 10) : -1;
  const { author, title, category, body, user_id: author_id } = postData;
  const editDeleteBtn = (
    <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
      <DeleteBtn />
      <EditBtn postData={postData} />
    </Box>
  );

  return (
    <Paper elevation={8} >
      <Container maxWidth="md" sx={{ my: 4, p: 1 }}>
        <Stack gap={1}>
          <Typography variant='body2'>Posted by {author}</Typography>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body2' sx={{ bgcolor: "#f48fb1", width: "fit-content", p: "5px", borderRadius: 1 }}>{category}</Typography>
          <Typography>{body}</Typography>
          {cur_user_id === author_id ? editDeleteBtn : ""}
        </Stack>
      </Container>
    </Paper>
  )
}

export default Post;