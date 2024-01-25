import type { LoaderFunction } from "react-router-dom";

// loads all posts
export async function postsLoader() {
  const posts = await fetch("http://localhost:3000/posts");
  return posts;
}

// loads all comments for a single post
export const postCommentsLoader: LoaderFunction = async ({ params }) => {
  const post = await fetch(`http://localhost:3000/posts/${params.id}`);
  return post;
}