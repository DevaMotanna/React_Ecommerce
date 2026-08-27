const QuantitySelector = ({ quantity, setQuantity, stock }) => {
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  return (
    <div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Quantity
      </p>

      <div className="inline-flex items-center rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button
          onClick={decreaseQty}
          className="px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          -
        </button>

        <span className="px-6 py-3 font-semibold text-gray-900 dark:text-white">
          {quantity}
        </span>

        <button
          onClick={increaseQty}
          className="px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
