import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import OrderSuccess from "./pages/OrderSuccess";
import AdminDashboard from "./pages/AdminDashboard";

import Navbar from "./componets/layout/Navbar";
import Footer from "./componets/layout/Footer";

import ProtectedRoute from "./componets/auth/ProtectedRoute";
import RoleProtectedRoute from "./componets/auth/RoleProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/order-success"
                element={<OrderSuccess />}
              />
            </Route>

            <Route path="/products" element={<Products />} />

            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            

            {/* Admin Routes */}
            <Route
              element={
                <RoleProtectedRoute allowedRoles={["admin"]} />
              }
            >
              <Route
                path="/admin"
                element={<AdminDashboard />}
              />
            </Route>

            <Route
              path="/wishlist"
              element={
                <div className="p-10 text-center">
                  Wishlist Page (Lesson 7)
                </div>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;