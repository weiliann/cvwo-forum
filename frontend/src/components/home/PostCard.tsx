import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// post cards displayed on index page linking to individual posts
export default function PostCard(params: PostCardParams) {
  const { post_id, title, name, category, body } = params;

  return (
    <Paper
      elevation={16}
      sx={{ p: 2, minHeight: '10vh', height: 'auto', minWidth: 'min-content', display: 'flex', flexGrow: 1 }}>
      <Link
        to={`comments/${post_id}`}
        style={{ width: '100%' }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant='body2' >
            Posted by: {name}
          </Typography>
          <Typography variant='h5'>
            Title: {title} { }
            <Button size="small" variant="contained" type="button" sx={{ width: "fit-content" }}>{category}</Button>
          </Typography>
          <Typography width="30vw" noWrap>
            {body}
          </Typography>
        </Box>
      </Link>
    </Paper>
  )
}

type PostCardParams = {
  post_id: number,
  title: string,
  name: string,
  category: string,
  body: string,
}

