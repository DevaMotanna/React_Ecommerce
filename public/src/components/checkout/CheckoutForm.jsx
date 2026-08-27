import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = ({ checkoutData, handleChange }) => {
  return (
    <div className="space-y-6">
      <AddressForm checkoutData={checkoutData} handleChange={handleChange} />
      <PaymentMethod checkoutData={checkoutData} handleChange={handleChange} />
    </div>
  );
};

export default CheckoutForm;
