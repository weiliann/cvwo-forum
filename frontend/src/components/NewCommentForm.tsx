import { useFetcher } from "react-router-dom"

export default function NewCommentForm() {
  const fetcher = useFetcher();
  const user_id = sessionStorage.getItem("user_id");
  const commentForm = (
    <fetcher.Form method="POST" action="newComment">
    <label htmlFor="comment-body">Write your comments: </label>
    <input type="text" name="body" id="comment-body" />
    <br />
    <label htmlFor="comment-user">temp soln for user id</label>
    <input type="text" name="user_id" id="comment-user" defaultValue={1} />

    <button type="submit">Post comment</button>
  </fetcher.Form> 
  )
  return (user_id ? commentForm : "Must be logged in to comment")
}