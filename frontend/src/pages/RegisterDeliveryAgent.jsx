import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTruck } from "react-icons/fa";

function RegisterDeliveryAgent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: "",
    driverLicense: "",
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
    if (!formData.fullName || !formData.email || !formData.phone || !formData.driverLicense) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Delivery Agent registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl flex w-full max-w-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block bg-orange-600 flex items-center justify-center">
          <FaTruck className="text-9xl text-white opacity-50" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Delivery Agent Registration
          </h2>
          <p className="text-gray-600 mb-6">Join our delivery team and start earning</p>

          <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              placeholder="agent@delivery.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              placeholder="+1 (555) 555-5555"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Home St, City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Vehicle Type */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Vehicle Type</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Select vehicle type</option>
              <option>Bicycle</option>
              <option>Motorcycle</option>
              <option>Car</option>
              <option>Van</option>
            </select>
          </div>

          {/* Driver License */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Driver License Number</label>
            <input
              type="text"
              name="driverLicense"
              value={formData.driverLicense}
              onChange={handleChange}
              placeholder="DL1234567890"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition font-semibold">
            Register as Delivery Agent
          </button>
          </form>

          {/* Back Link */}
          <p className="text-center text-sm text-gray-600 mt-5">
            <Link to="/register" className="text-orange-600 hover:underline">
              Back to role selection
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default RegisterDeliveryAgent;
