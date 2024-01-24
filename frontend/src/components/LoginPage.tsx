import { Form, useActionData } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import type { LoginError } from "../actions/postActions"

export default function LoginPage() {
  const errors = useActionData() as LoginError | Response
  return (
    <>
      <NavBar />
      <Box
        sx={{
          mt: 10,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Stack
          spacing={3}
          sx={{ width: "50vw" }}
        >
          <Typography >Sign in to existing account</Typography>
          <Box>
            <Form
              method="PATCH"
              action='/login'
              style={{ display: "flex", gap: "2rem" }}
            >
              <TextField
                label="Username"
                name="name"
                variant="outlined"
                required
                error={isError(errors)}
                helperText={isError(errors) && errors.login_error}
              />
              <Button variant="contained" type="submit" style={{ alignSelf: "end" }}>Sign In</Button>
            </Form>
          </Box>
          <Divider />
          <Typography >Or create a new account below</Typography>
          <Box>
            <Form method="POST" style={{ display: "flex", gap: "2rem" }}>
              <TextField
                label="New username"
                name="name"
                variant="outlined"
                required
                error={isError(errors)}
                helperText={isError(errors) && errors.register_error}
              />
              <Button variant="contained" type="submit" style={{ alignSelf: "end" }}>Register</Button>
            </Form>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

// returns true if errors is an object
function isError(errors: LoginError | Response): errors is LoginError {
  if (errors === undefined) {
    return false;
  } else {
    return typeof (errors as Response).redirected !== 'boolean';
  }
}
