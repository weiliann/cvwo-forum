import { redirect } from "react-router-dom";
import type { LoaderFunction, ActionFunction } from "react-router";

export async function postsLoader() {
  const posts = await fetch("http://localhost:3000/posts");
  return posts;
}

// returns post with its comments
export const postCommentLoader: LoaderFunction = async ({ params }) => {
  const post = await fetch(`http://localhost:3000/posts/${params.id}`);
  return post;
}

export const submitPost: ActionFunction = async({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const errors = hasErrors(postData);
  if (errors) return errors;

  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
  });
  if (response.ok) {
    return redirect("/");
  } else {
    // refactor in future
    const res = await response.json() ;
    console.log(res);
    return false; 
  }
}
export const editPost: ActionFunction = async({ request, params }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const errors = hasErrors(postData);
  if (errors) return errors;
  const response = await fetch(`http://localhost:3000/posts/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
  });
  // return null;
  if (response.ok) {
    return redirect(`/comments/${postData.user_id}`);
  } else {
    // refactor in future
    const res = await response.json() ;
    console.log(res);
    return false; 
  }
}


export interface PostData {
  [key: string]: string
}
type ObjFromEntries = {
  [k: string]: FormDataEntryValue
}

// returns false if no error else error object with error messages 
function hasErrors(postData: ObjFromEntries): boolean | PostData {
  const errors: PostData = {}
  // currently only check for presence
  for (const [key, val] of Object.entries(postData)) {
    if (typeof val == 'string' && val.trim() === '') {
      errors[key] = `${key} cannot be empty`;
    }
  }
  return Object.keys(errors).length ? errors : false; 
}

// export async function destroyAction() {
export const destroyAction: ActionFunction = async({ params }) => {
  const post_id = params.id;
  const response = await fetch(`http://localhost:3000/posts/${post_id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return redirect("/");
  } else {
    return false;
  }
} 

export const newComment: ActionFunction = async({ request, params }) => {
  const formData = await request.formData();
  formData.append("post_id", `${params.id}`);
  const postData = Object.fromEntries(formData);
  const errors = hasErrors(postData);
  if (errors) return errors;
  const response = await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
  });
  return null;
  if (response.ok) {
    return redirect(`/comments/${postData.user_id}`);
  } else {
    // refactor in future
    const res = await response.json() ;
    console.log(res);
    return false; 
  }
}