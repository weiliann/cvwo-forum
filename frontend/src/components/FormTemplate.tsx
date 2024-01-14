import { PostData } from "../actions/postActions";

type FormParams = {
  errors: PostData | Response
  fields?: {
    title: string,
    body: string,
    category: string,
    user_id: string,
  }
}

export default function FormTemplate({ errors, fields }: FormParams) {
  return (
    <>
      <p>
        <label htmlFor="post-title">Post title: </label>
        <input type="text" name="title" id="post-title" defaultValue={fields && fields.title}/>
        {isObj(errors) && <span>{errors.title}</span>}
      </p>
      <p>
        <label htmlFor="post-body">Post body: </label>
        <input type="text" name="body" id="post-body" defaultValue={fields && fields.body}/>
        {isObj(errors) && <span>{errors.body}</span>}
      </p>
      <p>
        <label htmlFor="post-cat">Category: </label>
        <input type="text" name="category" id="post-cat" defaultValue={fields && fields.category}/>
        {isObj(errors) && <span>{errors.category}</span>}
      </p>
      <p>
        <input type={fields ? "hidden" : "text"} name="user_id" placeholder="temp soln for user_id" value={fields?.user_id}/>
        {isObj(errors) && <span>{errors.user_id}</span>}
      </p> 

      <button type="submit">Submit</button>
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