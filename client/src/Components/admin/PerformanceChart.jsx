import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PerformanceChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!data.length) return;

    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create and store the new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((d) => d.imageName),
        datasets: [
          {
            label: "Load Time (ms)",
            data: data.map((d) => d.loadTime),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="mt-6 bg-white w-full shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Performance Graph</h2>
      <div style={{ height: "400px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PerformanceChart;
