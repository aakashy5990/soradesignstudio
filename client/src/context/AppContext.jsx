import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


// Point axios to your backend API
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
  }, []);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    Toaster,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
    return useContext(AppContext);
};
  