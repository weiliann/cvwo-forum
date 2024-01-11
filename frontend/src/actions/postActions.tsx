import type { LoaderFunction } from "react-router";

export async function postsLoader() {
  const posts = await fetch("http://localhost:3000/posts");
  return posts;
}

export const postCommentLoader: LoaderFunction =async ({ params }) => {
  const post = await fetch(`http://localhost:3000/posts/${params.id}`);
  return post;
}
