import React from 'react'
import { useEffect, useState } from "react";
import PerformanceList from "../../Components/admin/PerformanceList";
import PerformanceChart from "../../Components/admin/PerformanceChart";
import { useAppContext } from '../../context/AppContext';

const Performance = () => {

    const [data, setData] = useState([]);
    const { axios, toast } = useAppContext();

    const testImages = async () => {
        try{
            const imgs = document.querySelectorAll("img");
            const results = [];
            
            for (const img of imgs) {
                const start = performance.now();
                const testImg = new Image();
                testImg.src = img.src;
                
                await new Promise((resolve) => {
                    testImg.onload = () => {
                        const end = performance.now();
                        results.push({
                            imageName: img.src.split("/").pop(),
                            loadTime: Math.round(end - start),
                        });
                        resolve();
                    };
                });
            }
            
            setData(results);
            await axios.post('/performance/save-performance', { results });
            // await axios.post('http://localhost:4000/performance/save-performance', { results });
            console.log("Sending results:", results);
        }catch(error){
            console.log("catch run");
            toast(error.message);
        }
    };
  
    useEffect(() => {
        axios.get('/performance/get-performance')
        .then((res) => setData(res.data.performance))
        
        .catch((err) => toast(err.message));
    }, []);

  return (
    <>
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">🖼️ Image Performance Dashboard</h1>
      <button
        onClick={testImages}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
      >
        Run Performance Test
      </button>
      <PerformanceList data={data} />
      <PerformanceChart data={data} />
    </div>
    </>
  )
}

export default Performance