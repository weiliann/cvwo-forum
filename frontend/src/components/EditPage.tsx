import { Form, useActionData, useLocation } from "react-router-dom"
import NavBar from "./NavBar";
import FormTemplate from "./FormTemplate";
import { PostData } from "../actions/postActions";
export default function EditPage() {
  const { state } = useLocation();
  const errors = useActionData() as PostData | Response
  const postData = state.postData
  return (
    <>
      <NavBar />
      <Form method="PATCH" action={postData.post_id}>
        <FormTemplate errors={errors} fields={postData}/>
      </Form>
    </>
  )
}
