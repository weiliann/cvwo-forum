import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { PostData } from "../actions/postActions";

type FormParams = {
  errors: PostData | Response
  fields?: {
    title: string,
    body: string,
    category: string,
    user_id: string,
  }
}

export default function FormTemplate({ errors, fields }: FormParams) {
  const user_id = sessionStorage.getItem("user_id")
  return (
    <Container sx={{ mt: "8vh" }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} >
          <TextField
            id="post-title"
            label="Post title"
            name="title"
            defaultValue={fields && fields.title}
            variant="outlined"
            sx={{ display: 'block' }}
            error={isObj(errors) && !!errors?.title}
            helperText={isObj(errors) ? errors.title : "Title must not exceed 200 characters in length."}
            fullWidth
            InputProps={{
              inputProps: {
                minLength: 5,
                maxLength: 200,
              },
            }}
          />
          <TextField
            id="post-cat"
            label="Post category"
            name="category"
            defaultValue={fields && fields.category}
            variant="outlined"
            sx={{ display: 'block' }}
            error={isObj(errors) && !!errors?.category}
            helperText={isObj(errors) && errors.category}
            fullWidth
          />
        </Stack>
        <TextField
          id="post-body"
          label="Post body"
          name="body"
          defaultValue={fields && fields.body}
          variant="outlined"
          sx={{ display: 'block' }}
          multiline
          rows={4}
          fullWidth
          error={isObj(errors) && !!errors?.body}
          helperText={isObj(errors) && errors.body}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography>
            <input type="hidden" name="user_id" value={user_id || ""} />
          </Typography>
          {user_id ? 
            <Button type="submit" variant="contained">Submit</Button> :
            <Typography color={"error"}>Log in to start posting</Typography>
          }
        </Box>
      </Stack>
    </Container>
  )
}

// returns true if errors is an object
function isObj(errors: PostData | Response): errors is PostData {
  if (errors === undefined) {
    return false;
  } else {
    return typeof (errors as Response).redirected !== 'boolean';
  }
}