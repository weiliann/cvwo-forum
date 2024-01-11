import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { postsLoader, postCommentLoader } from "./actions/postActions.tsx"
import PostComment from './components/PostComment.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: postsLoader,
  },
  {
    path: "/comments/:id",
    element: <PostComment />, 
    loader: postCommentLoader,
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
