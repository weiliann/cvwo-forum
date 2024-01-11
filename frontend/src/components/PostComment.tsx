import { useLoaderData } from "react-router-dom";
import PostResponse from "../types/PostResponse";

function PostComment() {
  const post = useLoaderData() as PostResponse;
  return (
    <>
      <p>{post.user.name}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

export default PostComment; 