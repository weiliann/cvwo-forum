import { Stack, Typography } from "@mui/material"
import "../App.css"
import { AccountCircle } from "@mui/icons-material"
interface CommentProps {
  comment_id: number,
  body: string,
  name: string,
}
export default function Comment({ comment_id, body, name }: CommentProps) {
  return (
    <Stack direction="row" bgcolor="secondary.light" gap={1} sx={{ p: 2 }}>
      <AccountCircle />
      <Stack spacing={2}>
        <Typography variant="body2">{name}</Typography>
        <Typography>{body}</Typography>
      </Stack>
    </Stack>
  )
}