import { Paper, Stack, Typography } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"

// A comment on a post
export default function Comment({ comment_id, body, name }: CommentProps) {
  return (
    <Paper elevation={4} >
      <Stack direction="row" bgcolor="secondary.light" gap={1} sx={{ p: 2 }}>
        <AccountCircle />
        <Stack spacing={2}>
          <Typography variant="body2">{name}</Typography>
          <Typography>{body}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

interface CommentProps {
  comment_id: number,
  body: string,
  name: string,
}