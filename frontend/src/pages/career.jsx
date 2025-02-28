import React from "react";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      
      <div className="text-center py-16 bg-gray-900 text-white rounded-lg mb-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="text-lg mt-2">Share your resume with our HR team.</p>
      </div>

<div>
    <input className="border " type="file" name="file" id="resume" />
</div>
      
      <div className="text-center">
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Submit Resume
        </button>
      </div>
    </div>
  );
};

export default CareerPage;
