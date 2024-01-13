import '../App.css'
import DeleteBtn from './DeleteBtn';

type PostParams = {
  author: string,
  title: string,
  category: string,
  body: string,
}

// The head of the page
function Post({ author, title, category, body }: PostParams) {
  return (
    <>
     <div className="card">
       <p>{author}</p>
       <h2>{title}</h2>
       <p>{category}</p>
       <p>{body}</p>
     </div>
     <DeleteBtn />
    </>
  )
}

export default Post;