interface PostResponse {
  id: number,
  title: string,
  body: string,
  category: string,
  user: { name: string},
}

export default PostResponse;