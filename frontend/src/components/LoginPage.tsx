import { Form } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";

export default function LoginPage() {
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
              />
              <Button variant="contained" type="submit" style={{ alignSelf: "end" }}>Register</Button>
            </Form>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
