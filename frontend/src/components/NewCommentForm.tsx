import { Button, Stack, TextField } from "@mui/material";
import { useFetcher } from "react-router-dom"

export default function NewCommentForm() {
  const fetcher = useFetcher();
  const user_id = sessionStorage.getItem("user_id");
  const commentForm = (
    <fetcher.Form method="POST" action="newComment">
      <Stack direction="row" gap={2}>
        <TextField
          id="comment-body"
          label="Share your thoughts"
          name="body"
          />
        <input type="hidden" name="user_id" value= {user_id || ""} />
       <Button type="submit" variant="contained" sx={{alignSelf: "end"}}>Share</Button>
      </Stack>
  </fetcher.Form> 
  )
  return (user_id ? commentForm : "Must be logged in to comment")
}
