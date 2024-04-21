import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter , } from 'react-router-dom'
import Signin from './Regestersignin/signn';
import Signup from './Regestersignin/Signup';
import {ToastContainer } from 'react-toastify'
import Navbar from './childcomponents/Navbar';
import Forgotpassword from './Regestersignin/Forgotpassword';
import Home from './Pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =  createBrowserRouter([
  {path:"/", element: <App/>, children:[
  {path:"/", element:<Home/>},
  ]} ,
  {path:"/Signin", element:<Signin/>},
  {  path:"/Signup", element:<Signup/>},
  {path:"/forgetpassword", element:<Forgotpassword/>},
])


root.render(
  <React.StrictMode>
    
  <ToastContainer/>   
    <RouterProvider router={router}/>
  </React.StrictMode>

);


reportWebVitals();
