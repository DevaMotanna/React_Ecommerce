import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 md:p-14 text-center">
      <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-5">
        <ShoppingCart className="w-10 h-10 text-blue-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Your cart is empty
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Looks like you haven’t added anything yet. Start shopping to fill your
        cart.
      </p>

      <Link
        to="/products"
        className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
