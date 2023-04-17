import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { item: 'Apples', quantity: 30 },
  { item: 'Bananas', quantity: 20 },
  { item: 'Oranges', quantity: 15 },
  { item: 'Pears', quantity: 25 },
  { item: 'Grapes', quantity: 10 }
];

const Ichart= ()=> {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="item" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity" fill="#8884d8" />
    </BarChart>
    
  );
};

export default Ichart;