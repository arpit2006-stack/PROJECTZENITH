import React from "react";

const products = [
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
  { id: 1, name: "shoes", price: "1999.00 Rs", image: "https://via.placeholder.com/150" },
 
  
  
  
];

const Shoes = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Zenith's  <span className="text-purple-900">Shoes</span> Collection</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 hover:scale-102 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 w-100% bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="mt-2 w-100% bg-blue-600 text-white p-2 rounded-lg ml-5 hover:bg-blue-700">
              View Product
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
