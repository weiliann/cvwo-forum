import { Link } from "react-router-dom";
import { PostParams } from "../types/PostParams";
import { Button } from "@mui/material";

export default function EditBtn({ postData }: {postData: PostParams}) {
  return (
    <>
      <Link to={`/edit/${postData.post_id}`} state={{ postData, }}>
        <Button size="small" variant="contained" type="button">Edit post</Button>
      </Link>
    </>
  )
}