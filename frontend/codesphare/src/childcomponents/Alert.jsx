import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const Alert = () => {
    const navigate = useNavigate()
    useEffect(()=>{
   Swal.fire({
    title:" Please sign up",
    confirmButtonText:"Sign up",
    showCancelButton:true,
    cancelButtonText:"Already user",
    icon:"info",
}).then((result)=>{
   if(result.isConfirmed){
    navigate("/Signup")
   }
})    
}, [navigate] )

}

export default Alert