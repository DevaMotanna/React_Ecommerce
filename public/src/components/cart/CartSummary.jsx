import { useDispatch } from "react-redux";
import { clearCart } from "../../store/Slices/cartSlice";
import { Link } from "react-router-dom";

const CartSummary = ({ subtotal, shipping, tax, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <span>Tax (18%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Link
        to="/checkout"
        className="inline-flex justify-center items-center w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 transition mt-6"
      >
        Proceed to Checkout
      </Link>

      <button
        onClick={() => dispatch(clearCart())}
        className="w-full mt-3 rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-3 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
