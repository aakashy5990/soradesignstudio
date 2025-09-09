import React from 'react'
import { useAppContext } from '../../context/AppContext'
import uploadimg from '../../assets/upload_area.svg'
import { useState } from 'react'

const Client = () => {

    const { axios, toast } = useAppContext();

    const [ isAdding, setIsAdding ] = useState(false);

    const [ clientImg, setClientImg ] = useState(false);
    const [ clientName, setClientName] = useState('');
    const [ clientPryTitle, setClientPryTitle] = useState('');
    const [ clientSryTitle, setClientSryTitle] = useState('');


    const onSubmitClientHandler = async (e) => {
        try{

            e.preventDefault();
            setIsAdding(true);
            
            const client = {
                clientName, clientPryTitle, clientSryTitle
            }
          
            const formData = new FormData();
            formData.append('client',JSON.stringify(client));
            formData.append('clientImg',clientImg);
            console.log(formData);
            
            const { data } = await axios.post('/admin/clients', formData);
            
            if(data.success){
                toast.success(data.message);
                setIsAdding(false);
                setClientImg(false);
                setClientName('');
                setClientPryTitle('');
                setClientSryTitle('');
            }
            else{
                toast(data.message);
            }
        }catch(error){
            toast(error.message);
        }
    }

  return (
    <form onSubmit={onSubmitClientHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload Profile Img</p>
        <label htmlFor='clientImg'>
          <img src={clientImg ? URL.createObjectURL(clientImg) : uploadimg} className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setClientImg(e.target.files[0])} type="file" id='clientImg' hidden required />
        </label>

        <p className='mt-4'>Client Name</p>
        <input type="text" placeholder='Type here...' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setClientName(e.target.value)} value={clientName} />

        <p className='mt-4'>Client Primary Review</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setClientPryTitle(e.target.value)} value={clientPryTitle} />

        <p className='mt-4'>Client Secondry Review</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setClientSryTitle(e.target.value)} value={clientSryTitle} /> <br/>

        <button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'> {isAdding ? 'Adding...' :  'Add Client'} </button>

      </div>
    </form>
  )
}

export default Client