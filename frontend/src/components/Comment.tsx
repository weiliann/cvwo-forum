import "../App.css"

interface CommentProps {
  comment_id: number,
  body: string,
  name: string,
}
export default function Comment({ comment_id, body, name }: CommentProps) {
  return (
    <>
      <div className="card">
        {comment_id + body + name}
      </div>
    </>
  )
}