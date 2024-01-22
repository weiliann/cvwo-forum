import { Box, Paper, Typography } from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';

type PostCardParams = {
  post_id: number,
  title: string,
  name: string
}
// post cards displayed on index page linking to individual posts
function PostCard(params: PostCardParams) {
  const { post_id, title, name } = params;
  return (
    <Paper
      elevation={16}
      sx={{
        p: 2,
        height: '10vh',
        display: 'flex',
        flexGrow: 1,
      }}
    >
      <Link
        to={`comments/${post_id}`}
        style={{ width: '100%' }}
      >
        <Box 
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant='h5'>
            Posted by: {name}
          </Typography>
          <Typography variant='h3'>
            Title: {title}
          </Typography>
        </Box>
      </Link>
    </Paper>
  )
}

export default PostCard;