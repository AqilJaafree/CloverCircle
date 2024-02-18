import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'

//components
import Nav from '../components/nav/nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/RightBar'


export default function Layout() {

  //feed
  const Feed =()=>{
    return (
      <>
      <Nav />
      <main>
        <LeftBar />
        <div className="container">
          <Outlet />
        </div>
        <RightBar />
      </main>
      </>
    )
  }

  //router...
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Feed />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/chatbox/:id',
          element: <ChatBox />
        },
      ]
    },
    {
      path: '/login',
      element:<Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
  ])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}
