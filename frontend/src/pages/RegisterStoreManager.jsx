import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

function RegisterStoreManager() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    storeName: "",
    storeLocation: "",
    licenseNumber: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.fullName || !formData.email || !formData.storeName || !formData.licenseNumber) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Store Manager registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl flex w-full max-w-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block bg-blue-600 flex items-center justify-center">
          <FaStore className="text-9xl text-white opacity-50" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Store Manager Registration
          </h2>
          <p className="text-gray-600 mb-6">Create your store account to sell products</p>

          <form onSubmit={handleSubmit}>
          {/* Manager Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="manager@store.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 987-6543"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Store Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="My Grocery Store"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Store Location */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Store Location</label>
            <input
              type="text"
              name="storeLocation"
              value={formData.storeLocation}
              onChange={handleChange}
              placeholder="123 Market St, City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* License Number */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Business License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="LIC-123456789"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Register as Store Manager
          </button>
          </form>

          {/* Back Link */}
          <p className="text-center text-sm text-gray-600 mt-5">
            <Link to="/register" className="text-blue-600 hover:underline">
              Back to role selection
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default RegisterStoreManager;
