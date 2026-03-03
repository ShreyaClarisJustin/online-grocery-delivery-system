import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert("Login successful! Redirecting to home...");
      setTimeout(() => navigate("/home"), 1000);
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-2xl rounded-2xl flex w-[900px] overflow-hidden">
        
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1543168256-418811576931"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Welcome
          </h2>

          {/* Social Buttons */}
          <div className="space-y-3 mb-5">
            <button className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              Login with Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600" />
              Login with Facebook
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center mb-5 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="#" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;