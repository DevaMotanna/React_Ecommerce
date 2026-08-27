import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Menu,
  Heart,
  ShoppingCartIcon,
  LogIn,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import Container from "../common/Container";
import { useSelector } from "react-redux";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { currentUser, isAuthenticated, logout } = useAuth();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/wishlist", label: "Wishlist" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Shopify
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.to
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="relative p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[22px] h-[22px] px-1 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {currentUser?.name}
                  </Link>

                  {currentUser?.role === "admin" && (
                    <Link
                      to="/admin"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Admin
                    </Link>
                  )}

                  <Button variant="outline" size="sm" onClick={logout}>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="secondary" size="sm">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Button>
                </Link>
              )}

              <Link
                to="/cart"
                className="relative hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Button size="sm">
                  <ShoppingCart className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[22px] h-[22px] px-1 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === item.to
                    ? "bg-blue-100 text-blue-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
