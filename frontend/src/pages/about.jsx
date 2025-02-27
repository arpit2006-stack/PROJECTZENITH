import React from "react";



const founders = [
  {
    id: 1,
    name: "Afnan siddique",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Arpit Singh Bhadoriya",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Samar Qureshi",
    image: "https://via.placeholder.com/150",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
      
      <div className="text-center py-16 bg-white text-gray rounded-lg mb-10 w-full max-w-4xl">
        <h1 className="text-5xl font-bold">ZENITH</h1>
        <p className="text-lg mt-2">Crafting stylish and comfortable fashion for everyone.</p>
      </div>

      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center ">
        {founders.map((founder) => (
          <div key={founder.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={founder.image} alt={founder.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{founder.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
