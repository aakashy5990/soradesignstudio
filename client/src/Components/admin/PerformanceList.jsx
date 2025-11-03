import React from 'react'

const PerformanceList = ({data}) => {
  return (
    <div className="bg-white w-full shadow rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-2">Load Times</h2>
      <ul>
        {data.map((item, i) => (
          <li key={i} className="border-b py-1">
            {item.imageName} → <b>{item.loadTime} ms</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PerformanceList