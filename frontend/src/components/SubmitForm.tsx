import { Form, useActionData } from "react-router-dom";
import NavBar from "./NavBar";
import { PostData } from "../actions/postActions";
import FormTemplate from "./FormTemplate";
import { Container } from "@mui/material";

export default function SubmitForm() {
  const errors = useActionData() as PostData | Response
  return (
    <>
      <NavBar />
      <Container
        sx={{
          height: "100vh"
        }}
      >
        <Form method="post">
          <FormTemplate errors={errors} />
        </Form>
      </Container>
    </>
  )
}
