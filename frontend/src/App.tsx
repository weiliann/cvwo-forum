import { useLoaderData } from "react-router-dom"
import PostResponse from "./types/PostResponse";
import PostCard from "./components/PostCard"
import "./App.css"
import NavBar from "./components/NavBar";
import { useState } from "react";


function App() {
  const allPosts = useLoaderData() as PostResponse[];
  const [searchCategory, setSearchCategory] = useState('');
  return (
    <>
      <NavBar />
      <div className="body">
        <input
          type="text"
          placeholder="filter category"
          value={searchCategory}
          onChange={e => setSearchCategory(e.target.value)}
        />
        {allPosts.filter(post => post.category.includes(searchCategory))
          .map(post => (
            <PostCard key={post.id} post_id={post.id} title={post.title} name={post.user.name} />
          ))}
      </div>
    </>
  )
}

export default App
