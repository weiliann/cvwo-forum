import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { postCommentsLoader, postsLoader } from './api/loaders/postLoader.tsx'
import { destroyAction, editPost, newComment, submitNewPost } from './api/actions/postActions.tsx'
import { handleAccount } from './api/actions/loginActions.tsx'

import PostComment from './components/PostComment.tsx'
import SubmitForm from './components/SubmitForm.tsx'
import EditPage from './components/EditPage.tsx'
import LoginPage from './components/LoginPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: postsLoader,
  },
  {
    path: "/comments/:id",
    element: <PostComment />, 
    loader: postCommentsLoader,
    children: [
      {
        path: "destroy",
        action: destroyAction, 
        element: <></> 
      },
      {
        path: "newComment",
        action: newComment,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
    action: editPost,
  },
  {
    path: "/submit",
    element: <SubmitForm />,
    action: submitNewPost,
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: handleAccount,
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
