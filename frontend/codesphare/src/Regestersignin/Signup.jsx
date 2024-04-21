import React from 'react'
import logo from "../img/codephare.jpg"
import axios from "axios"
 import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../childcomponents/Spinner'

// import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {


const [ Name , setname] = useState()
const [ lastname , setlastname] = useState()
const [ Email  , setEmail] = useState()
const [ Password , setPassword] = useState()
const [loading , setloading] = useState(false)
const [ Username , settUserName] = useState()
const navigate = useNavigate() 

const handlesubmit = (e) =>{
e.preventDefault()

if(!navigator.onLine){
  toast.error('internet connection is not available ')
  return;
}

try{
  setloading(true);
  const data = axios.post('http://localhost:9000/Signup' ,{
  
  Name, 
  Username,
  lastname, 
  Email, 
  Password
}
).then(result   =>   {
  toast.success('thank you please singin', {
    autoClose: 2000, // Set time (in milliseconds) after which the notification will close automatically
  });
  navigate('/Signin')
}
  
  ).catch(err => {
    console.log()
toast.error('connection failed', {
  autoClose:100
});
  
  }  
    
   )
  
}catch(err){
console.error(err);
toast.error('CHAKE YOUR INTERNET');
} finally {
  setloading(false)
}

}


return (
 <>
     <div>
    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   

      <img
        className="mx-auto h-20 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        SIGN UP TO YOUR ACCOUNT
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6"  onSubmit={handlesubmit} >
        <div>
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
            Name 
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="Name"
              type="text"
              autoComplete="Name"
              style={{outline:'none'}}
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> setname(e.target.value)}   
 />

          </div>
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
            Username 
          </label>
          <div className="mt-2">
            <input
              id="Usernname"
              name="Username"
              type="text"
              autoComplete="Username"
              style={{outline:'none'}}
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> settUserName(e.target.value)}   
 />

          </div>
          <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
            Last Name
          </label>

          <div className="mt-2">

            <input
              id="Lastname"
              name="lastname"
              type="text"
              autoComplete="lastname"
              style={{outline:'none'}}

              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setlastname(e.target.value)} />
          </div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>

          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              style={{outline:'none'}}

              autoComplete="email"
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>setEmail(e.target.value)}   
             
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              style={{outline:'none'}}

              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> setPassword(e.target.value)}   
              
            />
          </div>
        </div>

        <div>
        <button  
        className="flex w-full justify-center rounded-md hover:bg-blue-900 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        disabled={loading}>
          {loading ?  'Spinner/>' : 'Sign up'}
         
          </button>
        </div>

      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        already have account {' '}
        <Link to={'/Signin'} type='submit' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
         Sign in
        </Link>
      </p>
    </div>
  </div>
  </div>
 </>
  )
}

export default Signup