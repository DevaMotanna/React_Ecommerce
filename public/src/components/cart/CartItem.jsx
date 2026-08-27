import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full sm:w-32 h-32 object-cover rounded-xl"
        />

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <p className="text-sm capitalize text-gray-500 dark:text-gray-400 mb-1">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Stock available: {item.stock}
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total: ${item.price * item.quantity}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="inline-flex items-center rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="px-5 py-3 font-semibold text-gray-900 dark:text-white">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
