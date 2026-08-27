import { Link } from "react-router-dom";
import Container from "../components/common/Container";

const OrderSuccess = () => {
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <Container>
        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Order Placed Successfully
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for your purchase. Your mock order has been placed
            successfully.
          </p>

          {order && (
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-6 text-left mb-8">
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Order ID:</span> {order.id}
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Customer:</span>{" "}
                {order.shippingInfo.fullName}
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Payment:</span>{" "}
                {order.shippingInfo.paymentMethod}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Total:</span> $
                {order.pricing.total.toFixed(2)}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition"
            >
              Continue Shopping
            </Link>
            <Link
              to="/profile"
              className="rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold px-6 py-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              View Profile
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderSuccess;
