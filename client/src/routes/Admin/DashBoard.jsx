import React, { useEffect, useState } from 'react'
import { useAppContext } from "../../context/AppContext"

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState({
    logos :[],
    client: [],
  });

  const { axios, toast, navigate } = useAppContext();

  const fetchDashboard = async () => {
    try{
      const { data } = await axios.get('admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    }catch(error){
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchDashboard();
  },[])


  const deleteClient = async (id) => {
    try{
      const { data } = await axios.post('admin/deleteclient', {id})
      data.success ? toast.success(data.message) : toast.error(data.message)
      await fetchDashboard();
    }catch(error){
      toast.error(error.message)
    }
  }

  const deleteLogo = async (id) => {
    try{
      const { data } = await axios.post('admin/deletelogo', {id})
      data.success ? toast.success(data.message) : toast.error(data.message)
      await fetchDashboard();
    }catch(error){
      toast.error(error.message)
    }
  }

  return (
    <div className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll p-4'>
      <div className='bg-white w-full max-w-6xl p-6 shadow rounded'>
        <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>
        
        {/* Logos Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Logos ({dashboardData.Logos?.length || 0})</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {dashboardData.Logos?.map((logo) => (
              <div key={logo._id} className='bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow'>
                {logo.image ? (
                  <img src={logo.image} alt={'Logo'} className='w-full h-20 object-contain' />
                ) : (
                  <div className='w-full h-20 bg-gray-200 rounded flex items-center justify-center'>
                    <span className='text-gray-500 text-sm'>No Image</span>
                  </div>
                )}
                <div className='flex items-center justify-between mt-3'>
                  <div className='flex gap-2'>
                    <a onClick={() => deleteLogo(logo._id)} className='bg-dangerbtn/80 rounded px-3 py-1.5 text-white cursor-pointer text-xs'>Delete</a>
                    <a onClick={() => navigate(`/admin/updatelogo/${logo._id}`)} className='bg-successbtn/80 rounded px-3 py-1.5 text-white cursor-pointer text-xs'>Update</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Clients ({dashboardData.getAllClients?.length || 0})</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {dashboardData.getAllClients?.map((client, index) => (
              <div key={index} className='bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow'>
                <div className='flex flex-col mb-5'>
                  {client.profileimg ? (
                    <img src={client.profileimg} alt={client.name} className='w-16 h-16 rounded-full object-cover mb-3' />
                  ) : (
                    <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-3'>
                      <span className='text-gray-500 text-xs'>No Photo</span>
                    </div>
                  )}
                  <h3 className='font-semibold text-lg mb-1'>{client.name || 'Unnamed Client'}</h3>
                  <p className='text-sm text-gray-600 mb-1'>{client.primarytitle || 'No primary title'}</p>
                  <p className='text-xs text-gray-500'>{client.title || 'No secondary title'}</p>
                </div>
                <div className='flex gap-2'>
                  <a onClick={() => deleteClient(client._id)} className='bg-dangerbtn/80 rounded px-5 py-2 text-white cursor-pointer'>Delete</a>
                  <a onClick={() => navigate(`/admin/updateclient/${client._id}`)} className='bg-successbtn/80 rounded px-5 py-2 text-white cursor-pointer'>Update</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard