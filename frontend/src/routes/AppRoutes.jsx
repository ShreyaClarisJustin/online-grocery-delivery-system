import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/customer/Login";
import Home from "../pages/customer/Home";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import OrderHistory from "../pages/customer/OrderHistory";
import TrackOrder from "../pages/customer/TrackOrder";
import Register from "../pages/Register";
import RegisterCustomer from "../pages/RegisterCustomer";
import RegisterStoreManager from "../pages/RegisterStoreManager";
import RegisterDeliveryAgent from "../pages/RegisterDeliveryAgent";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register/customer" element={<RegisterCustomer />} />
        <Route path="/register/store-manager" element={<RegisterStoreManager />} />
        <Route path="/register/delivery-agent" element={<RegisterDeliveryAgent />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/track/:id" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;