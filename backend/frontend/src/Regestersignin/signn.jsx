

import React, { useState } from 'react';
import logo from "../img/codephare.jpg"
import Button from '../childcomponents/button';
import {toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import  axios from 'axios'

function Signin() {

  const  [Password ,  SetPassword ] = useState()
  const  [Email , setEmail ] = useState()
const navigate = useNavigate()
  const handlesSignin = (e) => {
    e.preventDefault()
  
    if(!navigator.onLine){
    toast.error('internet Connection error',{
      autoClose: 100,
    })
  return;
  }


  const data = axios.post(`${window.location.origin}/Signin` , {
    Email,
    Password,
  }).then(result =>{
    if (result.data === 'Password is Correct') {
        navigate('/')
        toast.success('thank you ', {
          autoClose: 2000, // Set time (in milliseconds) after which the notification will close automatically
        });
    }else if(result.data === "Password is wrong" || result.data === "User not found"){
      console.log('user not found');
      toast.error('not found user', {
        autoClose: 2000, // Set time (in milliseconds) after which the notification will close automatically
      });
     }
    console.log(result);
  }) .catch(err =>{
    console.log(err);
    toast.error('Password or email wrong', {
      autoClose: 1000, // Set time (in milliseconds) after which the notification will close automatically
    });
   
  })

  }
  return (
    <div>
    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
      <img
        className="mx-auto h-20 w-auto"
        src={logo}
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={handlesSignin} >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e)=>setEmail(e.target.value)}
            />
            
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> SetPassword(e.target.value)}/>
          </div>
        </div>

        <div>
       <Button
       btntxt={"Sign in"}
       />
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        dont't have account{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
         sign up
        </a>
      </p>
    </div>
  </div>
  </div>
  );
}

export default Signin;