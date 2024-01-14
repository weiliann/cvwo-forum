import '../App.css'
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import type { PostParams } from '../types/PostParams';
// The head of the page

function Post(postData: PostParams) {
  const { author, title, category, body } = postData;
  return (
    <>
     <div className="card">
       <p>{author}</p>
       <h2>{title}</h2>
       <p>{category}</p>
       <p>{body}</p>
     </div>
     <div>
        <DeleteBtn />
        <EditBtn postData={postData}/>
     </div>
    </>
  )
}

export default Post;