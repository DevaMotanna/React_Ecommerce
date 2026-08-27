const OrderSummary = ({
  cartItems,
  subtotal,
  shipping,
  tax,
  total,
  onPlaceOrder,
}) => {
  return (
    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sticky top-24">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Qty: {item.quantity}
              </p>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4 text-lg font-bold text-gray-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full mt-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
