import { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const products = [
  { id: 1, name: "Tomato", price: "₹60", image: "🍅", category: "Vegetables" },
  { id: 2, name: "Chilli", price: "₹40", image: "🌶️", category: "Vegetables" },
  { id: 3, name: "Cauliflower", price: "₹50", image: "🥦", category: "Vegetables" },
  { id: 4, name: "Lettuce", price: "₹30", image: "🥬", category: "Vegetables" },
  { id: 5, name: "Apples", price: "₹120", image: "🍎", category: "Fruits" },
  { id: 6, name: "Oranges", price: "₹80", image: "🍊", category: "Fruits" },
  { id: 7, name: "Grapes", price: "₹100", image: "🍇", category: "Fruits" },
  { id: 8, name: "Beans", price: "₹90", image: "🫘", category: "Fruits" },
];

const categories = [
  { name: "Vegetables", icon: "🥬" },
  { name: "Fruits", icon: "🍎" },
  { name: "Dairy", icon: "🥛" },
  { name: "Snacks", icon: "🍪" },
  { name: "Beverages", icon: "☕" },
];

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">🛒 GroceryHub</h1>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button className="relative text-2xl text-green-600">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="text-2xl text-gray-600 hover:text-green-600">
              <FaUser />
            </button>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">At your doorstep is one click away</h2>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg">
              Order Now
            </button>
          </div>
          <div className="text-6xl">🛍️</div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Shopping Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center cursor-pointer"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h4 className="font-semibold text-gray-700">{cat.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Limited Stock */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Limited Stock</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <div className="text-6xl text-center mb-3">{product.image}</div>
              <h4 className="font-semibold text-gray-800">{product.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-bold"
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-8 text-center shadow-lg">
          <h3 className="text-4xl font-bold text-gray-800 mb-3">🎁 FIRST TIME !!!</h3>
          <p className="text-gray-700 text-lg">Get 50% off on your first order</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold mt-4">
            Claim Offer
          </button>
        </div>
      </section>

      {/* Unsold Fruits */}
      <section className="max-w-7xl mx-auto px-4 py-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Unsold Fruits</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <div className="text-6xl text-center mb-3">{product.image}</div>
              <h4 className="font-semibold text-gray-800">{product.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-bold"
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;





























// import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Green Capsicum",
//     price: 100,
//     image:
//       "https://images.unsplash.com/photo-1582515073490-dc0d84d2f8a1",
//   },
//   {
//     id: 2,
//     name: "White Sugar",
//     price: 60,
//     image:
//       "https://images.unsplash.com/photo-1580910051074-3eb694886505",
//   },
//   {
//     id: 3,
//     name: "Cauliflower",
//     price: 75,
//     image:
//       "https://images.unsplash.com/photo-1615486363105-6a3e7a5e768f",
//   },
//   {
//     id: 4,
//     name: "Green Lettuce",
//     price: 50,
//     image:
//       "https://images.unsplash.com/photo-1604908177522-040c3f6b3f36",
//   },
// ];

// function Home() {
//   return (
//     <div className="bg-green-50 min-h-screen">
      
//       {/* Navbar */}
//       <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-green-700">
//           GroceryMart
//         </h1>

//         <div className="flex gap-6 text-gray-600">
//           <Link to="/home" className="hover:text-green-600">Home</Link>
//           <Link to="/cart" className="hover:text-green-600">Cart</Link>
//           <Link to="/orders" className="hover:text-green-600">Orders</Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="px-10 py-8">
//         <div className="bg-red-700 text-white rounded-2xl p-8 flex justify-between items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">
//               At your doorstep in one click
//             </h2>
//             <button className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700">
//               Order Now
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1606788075761-1a5f4f4c8f69"
//             alt="Grocery"
//             className="w-64 rounded-xl hidden md:block"
//           />
//         </div>
//       </section>

//       {/* Shop by Category */}
//       <section className="px-10 py-6">
//         <h3 className="text-xl font-semibold mb-4 text-gray-700">
//           Shop by Category
//         </h3>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {["Fruits", "Vegetables", "Snacks", "Beverages"].map(
//             (category) => (
//               <div
//                 key={category}
//                 className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
//               >
//                 <p className="font-medium text-gray-600">
//                   {category}
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </section>

//       {/* First Time Offer Banner */}
//       <section className="px-10 py-6">
//         <div className="bg-white rounded-2xl shadow p-8 flex justify-between items-center">
//           <h2 className="text-2xl font-bold text-gray-700">
//             FIRST TIME !!! 🎁
//           </h2>
//           <p className="text-gray-500">
//             Get 20% off on your first order
//           </p>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <section className="px-10 py-8">
//         <h3 className="text-xl font-semibold mb-6 text-gray-700">
//           Fresh Products
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow hover:shadow-xl transition p-4"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-40 w-full object-cover rounded-lg"
//               />

//               <h4 className="mt-3 font-medium text-gray-700">
//                 {item.name}
//               </h4>

//               <p className="text-green-600 font-semibold mt-1">
//                 ₹{item.price}
//               </p>

//               <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// export default Home;