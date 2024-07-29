import React, { useState, useEffect } from "react";
import axios from "axios";
import './index.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/products')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto my-5 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Price: ${product.price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
