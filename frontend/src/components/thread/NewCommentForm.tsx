import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useFetcher } from "react-router-dom"

export default function NewCommentForm() {
  const [value, setValue] = useState('');
  const fetcher = useFetcher();
  const user_id = sessionStorage.getItem("user_id");
  const commentForm = (
    <fetcher.Form method="POST" action="newComment" onSubmit={()=>setValue('')}>
      <Stack direction="row" gap={2}>
        <TextField
          id="comment-body"
          label="Share your thoughts"
          name="body"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          sx={{ flexGrow: 1 }}
          />
        <input type="hidden" name="user_id" value= {user_id || ""} />
       <Button type="submit" variant="contained" sx={{alignSelf: "end"}}>Share</Button>
      </Stack>
  </fetcher.Form> 
  )
  const errMsg = <Typography color={"error"}>Log in to start sharing comments</Typography>
  return (user_id ? commentForm : errMsg)
}
