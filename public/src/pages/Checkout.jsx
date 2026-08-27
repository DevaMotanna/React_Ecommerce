import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/Slices/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    paymentMethod: "cod",
  });

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = Number((subtotal * 0.18).toFixed(2));
  const total = Number((subtotal + shipping + tax).toFixed(2));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "addressLine1",
      "city",
      "state",
      "zipCode",
      "country",
      "paymentMethod",
    ];

    const hasEmptyField = requiredFields.some(
      (field) => !checkoutData[field]?.trim(),
    );

    if (hasEmptyField) {
      alert("Please fill all required checkout fields.");
      return;
    }

    const orderPayload = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      shippingInfo: checkoutData,
      pricing: { subtotal, shipping, tax, total },
      placedAt: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderPayload));
    dispatch(clearCart());
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Checkout
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Complete your shipping and payment details to place your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm
              checkoutData={checkoutData}
              handleChange={handleChange}
            />
          </div>

          <div>
            <OrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
