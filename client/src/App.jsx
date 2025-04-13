import { useState, useEffect } from 'react'
import { loadCsvData } from './utils/dataLoader'
import ScatterPlot from './components/ScatterPlot'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await loadCsvData('/data/facebook_data.csv');
        setData(result);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div className="text-center p-8">Loading data...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Italian Facebook Analysis</h1>
        <p className="text-gray-600">Visualization of Italian Facebook URL data from 2018 and 2022 elections</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.length > 0 && (
          <ScatterPlot 
            data={data} 
            xKey="umap_x" 
            yKey="umap_y" 
            colorKey="election_year" 
          />
        )}
      </div>
    </div>
  )
}

export default App
