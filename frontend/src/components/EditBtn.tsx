import { Link } from "react-router-dom";
import { PostParams } from "../types/PostParams";

export default function EditBtn({ postData }: {postData: PostParams}) {
  return (
    <>
      <Link to={`/edit/${postData.post_id}`} state={{ postData, }}>
        <button type="button">Edit post</button>
      </Link>
    </>
  )
}