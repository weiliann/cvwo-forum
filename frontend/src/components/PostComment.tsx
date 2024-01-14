import { useLoaderData } from "react-router-dom";
import { PostCommentResponse } from "../types/PostResponse";
import Post from "./Post";
import Comment from "./Comment";
import NavBar from "./NavBar";
import NewCommentForm from "./NewCommentForm";

function PostComment() {
  const {id: post_id, title, body, category, user: {name, id: user_id}, comments} = useLoaderData() as PostCommentResponse;
  return (
    <>
      <NavBar />
      <Post author={name} title={title} category={category} body={body} post_id={post_id} user_id={user_id}/>
      {comments.map(comment => <Comment key={comment.id} comment_id={comment.id} body={comment.body} name={name} />)}
      <NewCommentForm />
    </>
  )
}

export default PostComment;