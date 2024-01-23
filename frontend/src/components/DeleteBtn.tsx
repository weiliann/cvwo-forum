import Button from "@mui/material/Button";
import { Form } from "react-router-dom";

export default function DeleteBtn() {
  return (
    <>
      <Form method="post" action="destroy" onSubmit={e => confirmDelete(e)}>
        <Button size="small" variant="contained" type="submit">Delete Post</Button>
      </Form>
    </>
  )
}
function confirmDelete(e: React.FormEvent<HTMLFormElement>) {
  if (!confirm("Are you sure you want to delete this post ?")) {
    e.preventDefault();
  }
}