import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../Components/admin/SideBar'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import monogram from "../../assets/logo.png"

const Admin = () => {
  const { token, setToken } = useAppContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token exists in localStorage as fallback
    const localToken = localStorage.getItem('token');
    
    if (!token && !localToken) {
      navigate('/admin/login');
    } else {
      setIsLoading(false);
    }
  }, [token, navigate]);

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/admin/');
  }
  
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-lg'>Loading...</div>
      </div>
    );
  }

  return (
      <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
      <img src={monogram} alt="" className='w-32 sm:w-30 cursor-pointer invert-50'/>
      <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer' >Logout</button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
      <SideBar/>
      <Outlet/>
    </div>
    </>

  )
}

export default Admin