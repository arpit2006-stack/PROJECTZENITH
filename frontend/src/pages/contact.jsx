import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center">
      
      <div className="text-center  text-gray rounded-lg mb-10 w-full max-w-4xl">
        
        <p className="text-lg mt-1">We would love to hear from you!</p>
      </div>

     
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
