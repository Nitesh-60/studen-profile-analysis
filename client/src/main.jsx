import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import UserInput from './components/UserInput.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/login',
    element: <Login />,
  
  },
  {
    path:'/dataform',
    element: <UserInput />,
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </>
)
