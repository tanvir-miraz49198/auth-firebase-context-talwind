import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProviders from './provider/AuthProviders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout></Layout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path : "register",
        element : <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
)
