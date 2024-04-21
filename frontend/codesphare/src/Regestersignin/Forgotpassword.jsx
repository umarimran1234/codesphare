import React from 'react'
import logo from "../img/codephare.jpg"
import axios from "axios"
 import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../childcomponents/Spinner'

const Forgotpassword = () => {

    const [ Email  , setEmail] = useState()
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
        Reset yout password inter email 
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6"   >
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
            Email
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
              onChange={(e)=> setEmail(e.target.value)}/>

          </div>
          

        <div>
        <button  
        className="flex w-full justify-center rounded-md hover:bg-blue-900 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
                 
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
  )
}

export default Forgotpassword