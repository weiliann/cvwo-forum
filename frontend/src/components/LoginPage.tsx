import { Form } from "react-router-dom";
import NavBar from "./NavBar";

export default function LoginPage() {
  return (
    <>
      <NavBar />
      <br />
      <p>Log in to your existing account</p>
      <Form method="PATCH" action='/login'>
        <label htmlFor="user-name">Enter your name</label>
        <input type="text" name="name" id="user-name" />
        <button type="submit">Enter</button>
      </Form>
      <p>Or create a new account below</p>
      <Form method="POST">
        <label htmlFor="user-name">Create a new name</label>
        <input type="text" name="name" id="user-name" />
        <button type="submit">Enter</button>
      </Form>
    </>
  )
}
