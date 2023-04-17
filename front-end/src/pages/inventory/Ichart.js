import React, {useState, useEffect} from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from  "axios";



const Ichart= ()=> {
  const [inventoryData, setInventoryData] = useState([]);

  async function fetchInventory(){
      try{
          const response = await axios.get('http://localhost:5000/get-inventory');
          console.log(response.data);
          setInventoryData(response.data);
      }catch(error){
          console.error("Failed to fetch inventory data:", error);

          console.log(error);
      }
  }; 
  useEffect(() => {
    fetchInventory();
}, []);
const chartData = inventoryData.map(item => ({ item: item.name, Quantity: item.quantity }));

  return (
    <div className="card shadow border-0 mb-7">

    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="item" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Quantity" fill="#8884d8" />
    </BarChart>
    </div>
    
  );
};

export default Ichart;