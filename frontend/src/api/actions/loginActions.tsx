import { redirect } from "react-router-dom";
import type { ActionFunction } from "react-router";
import type { LoginError } from "./actionTypes";

// handles both login and register actions
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
  // response is null if invalid login, and will have an error when registering with existing username  
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
