import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import upload from '../../assets/upload_area.svg'

const UpdateLogo = () => {
  const { axios, toast, navigate } = useAppContext();
  const { id: routeId } = useParams();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState('');
  const [newImgFile, setNewImgFile] = useState(null);
  const [newImgPreview, setNewImgPreview] = useState('');

  const onSubmitUpdateHandler = async (e) => {
    e.preventDefault();
    if (!routeId) {
      toast.error('Missing logo id in route');
      return;
    }
    if (!newImgFile) {
      toast.error('Please choose a new image');
      return;
    }
    try{
      setIsUpdating(true);
      const formData = new FormData();
      formData.append('id', routeId);
      formData.append('image', newImgFile);
      const { data } = await axios.post('/admin/updatelogo', formData);
      if (data.success) {
        toast.success(data.message);
        navigate('/admin/');
      } else {
        toast.error(data.message || 'Update failed');
      }
    }catch(error){
      toast.error(error.message);
    } finally {
      setIsUpdating(false);
    }
  }

  useEffect(() => {
    const loadLogo = async () => {
      if (!routeId) return;
      try{
        setIsLoading(true);
        const { data } = await axios.get(`/admin/logo/${routeId}`);
        if (data.success && data.logo) {
          setCurrentImg(data.logo.image || '');
        } else {
          toast.error(data.message || 'Failed to load logo');
        }
      }catch(error){
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadLogo();
  }, [routeId]);

  const onChooseImg = (file) => {
    setNewImgFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setNewImgPreview(url);
    } else {
      setNewImgPreview('');
    }
  }

  if (isLoading) {
    return (
      <div className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll flex items-center justify-center'>
        <div className='bg-white px-6 py-4 shadow rounded'>Loading logo...</div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmitUpdateHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <div className='flex items-center gap-4'>
          <div>

          {/* <p>New Image (optional)</p>
            <label htmlFor='image'>
            <img src={newImgPreview ? URL.createObjectURL(newImgPreview) : upload } alt='Preview' className='mt-2 h-16 rounded cursor-pointer' />
            <input
              type='file'
              accept='image/*'
              hidden
              id='image'
              className='mt-2'
              onChange={(e) => onChooseImg(e.target.files && e.target.files[0])}
              />
            </label> */}


            
            <p>Current Logo</p>
            {currentImg ? (
              <img src={currentImg} alt='Current' className='mt-2 h-16 rounded cursor-pointer' />
            ) : (
              <div className='mt-2 h-20 w-20 rounded bg-gray-200 border' />
            )}
          </div>
          <div>
            <label htmlFor='image' className='block cursor-pointer'>
              <p>New Image</p>
              <img src={newImgPreview || upload} alt='Preview' className='mt-2 h-16 rounded cursor-pointer' />
              <input
                type='file'
                accept='image/*'
                hidden
                id='image'
                onChange={(e) => onChooseImg(e.target.files && e.target.files[0])}
              />
            </label>
          </div>
        </div>

        <button disabled={isUpdating} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>
          {isUpdating ? 'Updating...' : 'Update Logo'}
        </button>
      </div>
    </form>
  )
}

export default UpdateLogo


