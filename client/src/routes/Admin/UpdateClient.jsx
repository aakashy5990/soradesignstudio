import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import upload from '../../assets/upload_area.svg'

const UpdateClient = () => {
  const { axios, toast, navigate } = useAppContext();
  const { id: routeId } = useParams();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientPryTitle, setClientPryTitle] = useState('');
  const [clientSryTitle, setClientSryTitle] = useState('');
  const [currentImg, setCurrentImg] = useState('');
  const [newImgFile, setNewImgFile] = useState(null);
  const [newImgPreview, setNewImgPreview] = useState('');

  const onSubmitUpdateHandler = async (e) => {
    e.preventDefault();
    if (!routeId) {
      toast.error('Missing client id in route');
      return;
    }
    try{
      setIsUpdating(true);
      const formData = new FormData();
      formData.append('id', routeId);
      formData.append('clientName', clientName || '');
      formData.append('clientPryTitle', clientPryTitle || '');
      formData.append('clientSryTitle', clientSryTitle || '');
      if (newImgFile) {
        formData.append('clientImg', newImgFile);
      }
      const { data } = await axios.post('/admin/updateclient', formData);
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
    const loadClient = async () => {
      if (!routeId) return;
      try{
        setIsLoading(true);
        const { data } = await axios.get(`/admin/client/${routeId}`);
        if (data.success && data.client) {
          setClientName(data.client.name || '');
          setClientPryTitle(data.client.primarytitle || '');
          setClientSryTitle(data.client.title || '');
          setCurrentImg(data.client.profileimg || '');
        } else {
          toast.error(data.message || 'Failed to load client');
        }
      }catch(error){
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadClient();
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
        <div className='bg-white px-6 py-4 shadow rounded'>Loading client...</div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmitUpdateHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <div className='flex items-center gap-4'>
          <div>
            <p>Current Image</p>
            {currentImg ? (
              <img src={currentImg} alt='Current' className='mt-2 h-16 w-16 rounded object-cover border' />
            ) : (
              <div className='mt-2 h-16 w-16 rounded bg-gray-200 border' />
            )}
          </div>
          <div>


            <p>New Image (optional)</p>
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
            </label>
          </div>
        </div>

        <p className='mt-4'>Client Name</p>
        <input
          type="text"
          placeholder='Type here...'
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={e => setClientName(e.target.value)}
          value={clientName}
        />

        <p className='mt-4'>Client Primary Review</p>
        <input
          type="text"
          placeholder='Type here'
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={e => setClientPryTitle(e.target.value)}
          value={clientPryTitle}
        />

        <p className='mt-4'>Client Secondary Review</p>
        <input
          type="text"
          placeholder='Type here'
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={e => setClientSryTitle(e.target.value)}
          value={clientSryTitle}
        />
        
        <div>
        <button disabled={isUpdating} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>
          {isUpdating ? 'Updating...' : 'Update Client'}
        </button>
        </div>
      </div>
    </form>
  )
}

export default UpdateClient