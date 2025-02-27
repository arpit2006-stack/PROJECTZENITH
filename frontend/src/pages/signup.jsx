import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../lib/axios";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
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

    setMessage(isSignUp ? "Sign-up successful!" : "Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-200 transition-all duration-500 transform scale-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
              required
            />
          )}
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 mt-4 rounded-lg hover:opacity-90 transition font-semibold text-lg shadow-md"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            {message}
          </p>
        )}
        <p className="mt-4 text-center text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 font-semibold ml-1 hover:underline"
          >
            <NavLink to="/login">{isSignUp ? "Log in" : "Sign up"}</NavLink>
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
