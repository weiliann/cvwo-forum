import type { ActionFunction } from "react-router-dom";
import { redirect } from "react-router-dom";
import type { ObjFromEntries, PostData } from "./actionTypes";

// Attempts to create a new post
export const submitNewPost: ActionFunction = async({ request }) => {
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

// Attempts to edit the post
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
  if (response.ok) {
    return redirect(`/comments/${params.id}`);
  } else {
    // refactor in future
    const res = await response.json() ;
    console.log(res);
    return redirect(`/edit/${params.id}` );
  }
}

// Attempts to delete a post
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

// Attempts to add a comment to a post
export const newComment: ActionFunction = async({ request, params }) => {
  const formData = await request.formData();
  // needs post_id to identify the post to add the comment
  formData.append("post_id", `${params.id}`);
  const postData = Object.fromEntries(formData);
  const errors = hasErrors(postData);
  if (errors) return errors;
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
  });
  return null;
}

// checks form for error
// returns false if no error else the error object with error messages 
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