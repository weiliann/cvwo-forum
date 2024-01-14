export default interface PostResponse {
  id: number,
  title: string,
  body: string,
  category: string,
  user: { name: string, id: number},
}

export interface PostCommentResponse extends PostResponse {
  comments: CommentResponse[] 
}

export interface CommentResponse {
  id: number,
  body: string,
  user_id: number,
} 