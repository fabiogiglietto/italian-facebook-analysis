import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const ScatterPlot = ({ data, xKey, yKey, colorKey }) => {
  const [formattedData, setFormattedData] = useState([]);
  
  useEffect(() => {
    if (data) {
      setFormattedData(data);
    }
  }, [data]);
  
  return (
    <div className="w-full h-96 bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Content Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" dataKey={xKey} name="X" />
          <YAxis type="number" dataKey={yKey} name="Y" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Data Points" data={formattedData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPlot;
