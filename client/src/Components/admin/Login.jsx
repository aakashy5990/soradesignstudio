import React, {useState} from 'react'
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const Login = () => {

  const {axios, setToken} = useAppContext();

  const [ username , setUsername ] = useState('');
  const [ password , setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { data } = await axios.post('/admin/login', {username, password});
      if(data.success){
        setToken(data.token);
        localStorage.setItem('token',data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      const message = error.response?.data?.message || error.message;
      toast.error(message)
    }
  }

    return (
      <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full py-6 text-center'>
          <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
          <p className='font-light'>Enter Your credentials to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
          <div className='flex flex-col'>
            <label>Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} required placeholder='Enter Your Username...' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
          </div>
          <div className='flex flex-col'>
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Enter Your Password...' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
          </div>
          <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'> Login </button>
        </form>
      </div>
      </div>
    </div>
    )
  }

  export default Login