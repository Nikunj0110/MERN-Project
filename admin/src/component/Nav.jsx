import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import {authDataContext} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {adminDataContext} from '../context/AdminContext'
import { toast } from "react-toastify";



function Nav() {
  let navigate=useNavigate()
let {serverUrl}=useContext(authDataContext)
let {getAdmin}=useContext(adminDataContext)

  const logout=async()=>{
    try {
      const result=await axios.get(serverUrl+'/api/auth/logout',{withCredentials:true})
      console.log(result.data);
      getAdmin()
      navigate('/login')
      toast.success("Logout Success")
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed")
    }
  }
  return (
    <div className='w-full h-[60px] bg-white z-50 fixed  top-0 flex items-center  justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
      <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer'>
      {/* <img src='' className='w-[30px]'/> */}
      <h1 className='md:text-[25px] text-[23px] p-[35px] md:p-[0px] text-black font-sans '>Mobile&nbsp;Zone</h1>

      </div>
      <button onClick={logout} className='text-[15px]  border-[black] cursor-pointer bg-white py-[10px] px-[20px] rounded-2xl text-black'>Logout
      </button>

    </div>
  )
}

export default Nav