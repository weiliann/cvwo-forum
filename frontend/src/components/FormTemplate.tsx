import { PostData } from "../actions/postActions";

export default function FormTemplate({ errors }: { errors: PostData | Response }) {
  return (
    <>
      <p>
        <label htmlFor="post-title">Post title: </label>
        <input type="text" name="title" id="post-title"/>
        {isObj(errors) && <span>{errors.title}</span>}
      </p>
      <p>
        <label htmlFor="post-body">Post body: </label>
        <input type="text" name="body" id="post-body"/>
        {isObj(errors) && <span>{errors.body}</span>}
      </p>
      <p>
        <label htmlFor="post-cat">Category: </label>
        <input type="text" name="category" id="post-cat"/>
        {isObj(errors) && <span>{errors.category}</span>}
      </p>
      <p>
        <input type="text" name="user_id" placeholder="temporary soln for id"/>
        {isObj(errors) && <span>{errors.user_id}</span>}
      </p> 

      <button type="submit">Create</button>
    </>
  )
}

function isObj(errors: PostData | Response): errors is PostData {
  if (errors === undefined) {
    return false;
  } else {
    return typeof (errors as Response).redirected !== 'boolean';
  }
}