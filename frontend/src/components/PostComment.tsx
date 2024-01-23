import { useLoaderData } from "react-router-dom";
import { PostCommentResponse } from "../types/PostResponse";
import Post from "./Post";
import Comment from "./Comment";
import NavBar from "./NavBar";
import NewCommentForm from "./NewCommentForm";
import { Box, Container, Stack } from "@mui/material";

function PostComment() {
  const {id: post_id, title, body, category, user: {name, id: user_id}, comments} = useLoaderData() as PostCommentResponse;
  return (
    <>
      <NavBar />
      <Container maxWidth= "md" sx={{height: "100vh"}}>
      <Post
        author={name}
        title={title}
        category={category}
        body={body}
        post_id={post_id}
        user_id={user_id}
      />
        <Stack gap={2} mt={2}>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment_id={comment.id}
              body={comment.body}
              name={comment.user.name}
            />
          ))}
          <Box sx={{alignSelf: "center"}}>
            <NewCommentForm />
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default PostComment;