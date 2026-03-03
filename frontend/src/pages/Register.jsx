// import { Link } from "react-router-dom";
// import { FaUser, FaStore, FaTruck } from "react-icons/fa";

// function Register() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">
        
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">
//             Create Account
//           </h2>
//           <p className="text-gray-600">
//             Select your role to get started
//           </p>
//         </div>

//         {/* Role Selection Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
//           {/* Customer Card */}
//           <Link 
//             to="/register/customer"
//             className="p-8 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition transform hover:scale-105 text-center cursor-pointer"
//           >
//             <FaUser className="text-5xl text-green-600 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//               Customer
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Order groceries and have them delivered to your doorstep
//             </p>
//           </Link>

//           {/* Store Manager Card */}
//           <Link 
//             to="/register/store-manager"
//             className="p-8 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition transform hover:scale-105 text-center cursor-pointer"
//           >
//             <FaStore className="text-5xl text-blue-600 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//               Store Manager
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Manage your store and sell products to customers
//             </p>
//           </Link>

//           {/* Delivery Agent Card */}
//           <Link 
//             to="/register/delivery-agent"
//             className="p-8 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition transform hover:scale-105 text-center cursor-pointer"
//           >
//             <FaTruck className="text-5xl text-orange-600 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//               Delivery Agent
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Deliver orders and earn money as a delivery agent
//             </p>
//           </Link>

//         </div>

//         {/* Back to Login Link */}
//         <div className="text-center">
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <Link to="/" className="text-green-600 hover:underline font-semibold">
//               Login here
//             </Link>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Register;






















import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("customer");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    storeName: "",
    storeLocation: "",
    vehicleType: "",
    licenseNumber: "",
    agreeTerms: false
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");

    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      setErrors("Please fill all required fields!");
      return;
    }

    if (!formData.agreeTerms) {
      setErrors("You must agree to the Terms and Conditions!");
      return;
    }

    if (role === "customer" && !formData.address) {
      setErrors("Please enter delivery address!");
      return;
    }

    if (role === "manager" && (!formData.storeName || !formData.storeLocation)) {
      setErrors("Please fill store details!");
      return;
    }

    if (role === "delivery" && (!formData.vehicleType || !formData.licenseNumber)) {
      setErrors("Please fill vehicle and license details!");
      return;
    }

    // Success message and redirect
    alert(`Registration successful as ${role === "customer" ? "Customer" : role === "manager" ? "Store Manager" : "Delivery Agent"}! Redirecting to login...`);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {["customer", "manager", "delivery"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full border transition ${
                role === r
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {r === "customer" && "Customer"}
              {r === "manager" && "Store Manager"}
              {r === "delivery" && "Delivery Agent"}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          
          {/* Error Message */}
          {errors && (
            <div className="md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {errors}
            </div>
          )}
          
          {/* Common Fields */}
          <div>
            <label className="block text-sm mb-1 text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Role Specific Fields */}

          {role === "customer" && (
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-gray-600">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter your full address"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
          )}

          {role === "manager" && (
            <>
              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Enter store name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Store Location
                </label>
                <input
                  type="text"
                  name="storeLocation"
                  value={formData.storeLocation}
                  onChange={handleChange}
                  placeholder="Enter store location"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </>
          )}

          {role === "delivery" && (
            <>
              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select vehicle type</option>
                  <option value="Bike">Bike</option>
                  <option value="Scooter">Scooter</option>
                  <option value="Car">Car</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  License Number
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="Enter license number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </>
          )}

          {/* Terms Checkbox */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Register as {role === "customer"
                ? "Customer"
                : role === "manager"
                ? "Store Manager"
                : "Delivery Agent"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;