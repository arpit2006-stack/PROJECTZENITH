import { useState } from "react";
import axios from "../lib/axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    // setMessage("Sign-up successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-200 transition-all duration-500 transform scale-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
            required
          />
          <p>
            Already have an account ? <a href="/login" className="text-blue-300">LOGIN</a>
          </p>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 mt-4 rounded-lg hover:opacity-90 transition font-semibold text-lg shadow-md"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
  );
};

export default SignUpForm;