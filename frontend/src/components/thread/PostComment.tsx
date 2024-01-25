import { useLoaderData } from "react-router-dom";
import { PostCommentResponse } from "../../types/PostResponse";
import Post from "./Post";
import Comment from "./Comment";
import NavBar from "../nav/NavBar";
import NewCommentForm from "./NewCommentForm";
import { Container, Stack, ThemeProvider } from "@mui/material";
import theme from "../../theme";

// Composition of post with its comments
function PostComment() {
  const { id: post_id, title, body, category, user: { name, id: user_id }, comments } = useLoaderData() as PostCommentResponse;

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="md" sx={{ minHeight: "100vh" }}>
        <Post
          author={name}
          title={title}
          category={category}
          body={body}
          post_id={post_id}
          user_id={user_id}
        />
        <NewCommentForm />
        <Stack gap={2} mt={2}>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment_id={comment.id}
              body={comment.body}
              name={comment.user.name}
            />
          ))}
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default PostComment;