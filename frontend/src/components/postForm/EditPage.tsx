import { Form, useActionData, useLocation } from "react-router-dom"
import NavBar from "../nav/NavBar";
import FormTemplate from "./FormTemplate";
import { PostData } from "../../api/actions/actionTypes";
import { Box } from "@mui/material";

export default function EditPage() {
  const { state } = useLocation();
  const errors = useActionData() as PostData | Response
  return (
    <Box sx={{ height: "100vh" }}>
      <NavBar />
      <Form method="PATCH">
        <FormTemplate errors={errors} fields={state.postData}/>
      </Form>
    </Box>
  )
}
