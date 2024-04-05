import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import UserInput from './components/UserInput.jsx'
import Profile from './components/Profile.jsx'
import { Provider } from 'react-redux';
import store from './utils/store';
import StudentInfo from './features/studentInfo/studentInfoSlice';



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
  
  },
  {
    path:'/profile',
    element: <Profile />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <RouterProvider router={router} >
    
      <App />
    
    </RouterProvider>
    </Provider>
  </>
)
