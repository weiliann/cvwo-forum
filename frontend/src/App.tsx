import { useLoaderData } from "react-router-dom"
import PostResponse from "./types/PostResponse";
import PostCard from "./components/PostCard"
import "./App.css"


function App() {
  const allPosts = useLoaderData() as PostResponse[];
  return (
    <>
      <div className="body">
        {allPosts.map(post => (
          <PostCard post_id={post.id} title={post.title} name={post.user.name}/>
        ))}
      </div>
    </>
  )
}

export default App
