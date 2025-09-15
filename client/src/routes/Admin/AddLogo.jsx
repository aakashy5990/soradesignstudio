import React,{ useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import upload from '../../assets/upload_area.svg'


const AddLogo = () => {

    const { axios, toast } = useAppContext();

    const [ isAdding, setIsAdding ] = useState(false);

    const [ image, setImage ] = useState(false);

    
    const onSubmitHandler = async (e) => {

        try{
          e.preventDefault();
          setIsAdding(true);
    
          const formData = new FormData();
          formData.append('image',image);
    
          const { data } = await axios.post('/admin/addlogo', formData);
    
          if(data.success){
            toast.success(data.message);
            setImage(false);
          }
          else{
            toast.error(data.message);
          }
        }
        catch(error){
          toast.error(error.message)
        }
        finally{
          setIsAdding(false);
        }
      }

    return (
        <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
          <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
            <p>Upload Logo</p>
            <label htmlFor='image'>
              <img src={image ? URL.createObjectURL(image) : upload} className='mt-2 h-16 rounded cursor-pointer' />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
            </label>
    
            
            <button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'> {isAdding ? 'Adding...' :  'Add Blog'} </button>
    
          </div>
        </form>
      )
}

export default AddLogo