import { useLoaderData } from "react-router-dom"
import PostResponse from "./types/PostResponse";
import PostCard from "./components/PostCard"
import "./App.css"
import NavBar from "./components/NavBar";


function App() {
  const allPosts = useLoaderData() as PostResponse[];
  return (
    <>
      <NavBar />
      <div className="body">
        {allPosts.map(post => (
          <PostCard key={post.id} post_id={post.id} title={post.title} name={post.user.name}/>
        ))}
      </div>
    </>
  )
}

export default App
