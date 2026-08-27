const paymentOptions = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "upi", label: "UPI Payment" },
];

const PaymentMethod = ({ checkoutData, handleChange }) => {
  return (
    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Payment Method
      </h2>

      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-4 cursor-pointer transition ${
              checkoutData.paymentMethod === option.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={option.id}
              checked={checkoutData.paymentMethod === option.id}
              onChange={handleChange}
            />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
