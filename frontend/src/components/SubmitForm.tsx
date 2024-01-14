import { Form, useActionData } from "react-router-dom";
import NavBar from "./NavBar";
import { PostData } from "../actions/postActions";
import FormTemplate from "./FormTemplate";

export default function SubmitForm() {
  const errors = useActionData() as PostData | Response
  return (
    <>
      <NavBar />
      <Form method="post">
        <FormTemplate errors={errors}/>
      </Form>
    </>
  )
}
