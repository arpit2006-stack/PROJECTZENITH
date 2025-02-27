import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../lib/axios"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    try {
      const response = await axios.post("/api/auth/login", { email, password });

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "An error occurred.");
    }
    setMessage("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-200 transition-all duration-500 transform scale-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">Log In</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
            required
          />
          <p>
            Don't have an account ? <a href="/signup" className="text-blue-300">SIGNUP</a>
          </p>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 mt-4 rounded-lg hover:opacity-90 transition font-semibold text-lg shadow-md"
          >
            Log In
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
  );
};

export default LoginForm