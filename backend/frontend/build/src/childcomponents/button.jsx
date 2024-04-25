import React from 'react'

const Button = ({btntxt}) => {
  return (
<>
   <button className="flex w-full justify-center rounded-md hover:bg-blue-900 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {btntxt}
          </button>
</>

    )
}

export default Button