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
    return redirect(`/comments/${params.id}`);
  } else {
    // refactor in future
    const res = await response.json() ;
    console.log(res);
    return redirect(`/edit/${params.id}` );
  }
}


export interface PostData {
  [key: string]: string
}
type ObjFromEntries = {
  [k: string]: FormDataEntryValue
}

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
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
  });
  return null;
}

export type LoginError = {
  login_error?: string,
  register_error?: string
}
export const handleAccount: ActionFunction = async({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  let user_id;
  let response;
  const errors: LoginError = {};
  const user_name = postData.name;
  if (request.method === "PATCH") {
    // attempt to login
    response = await fetch(`http://localhost:3000/users/find/${user_name}`)
  } else {
    // create new account
      response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
      });
  }
  // response is null if invalid login, will have some errors when trying to register with existing username  
  const json_response = await response.json() as {id: number, name: string[]};
  
  if (json_response === null) {
    // sets error msg for invalid login
    errors["login_error"] = "Username does not exist";
  } else if (!json_response.id) {
    // error msg for failure to register 
    errors["register_error"] = json_response.name[0];
  }

  if (Object.keys(errors).length !== 0) {
    console.log(errors)
    return errors;
  } else {
    user_id = json_response.id.toString();
    const user_name = json_response.name.toString();
    sessionStorage.setItem('user_id', user_id)
    sessionStorage.setItem('user_name', user_name)
    return redirect("/");
  }
}


