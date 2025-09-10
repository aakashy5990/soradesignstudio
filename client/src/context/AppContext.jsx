import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Configure axios with proper base URL and credentials
const baseURL = import.meta.env.VITE_BASE_URL || 'https://your-render-app.onrender.com';
axios.defaults.baseURL = baseURL;
// We use JWT from localStorage, not cookies → avoid CORS credential issues on Hostinger
axios.defaults.withCredentials = false;
axios.defaults.timeout = 30000; // 30 second timeout for slower networks/tunnels

// Add request interceptor for better error handling
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for global error handling
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin/login';
    }
    
    if (error.code === 'NETWORK_ERROR' || !error.response) {
      toast.error('Network error. Please check your connection.');
    } else if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    }
    
    return Promise.reject(error);
  }
);

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    toast,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#4ade80',
              color: '#fff',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
    return useContext(AppContext);
};
  