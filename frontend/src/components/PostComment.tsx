import { useLoaderData } from "react-router-dom";
import { PostCommentResponse } from "../types/PostResponse";
import Post from "./Post";
import Comment from "./Comment";

function PostComment() {
  const {id: post_id, title, body, category, user: {name}, comments} = useLoaderData() as PostCommentResponse;
  return (
    <>
      <Post author={name} title={title} category={category} body={body}/>
      {comments.map(comment => <Comment comment_id={comment.id} body={comment.body} name={name} />)}
    </>
  )
}

export default PostComment;