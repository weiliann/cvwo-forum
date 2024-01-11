import '../App.css';
import { Link } from 'react-router-dom';

type PostCardParams = {
  post_id: number,
  title: string,
  name: string  
}
// post cards displayed on index page linking to individual posts
function PostCard(params: PostCardParams) {
  const { post_id, title, name } = params;
  return (
    <div className="card">
      <Link to={`comments/${post_id}`}> {title} </Link> 
      {post_id + title + name } 
    </div>
  )
}

export default PostCard;