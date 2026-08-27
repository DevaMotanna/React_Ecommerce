const AddressForm = ({ checkoutData, handleChange }) => {
  return (
    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Shipping Address
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={checkoutData.fullName}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={checkoutData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={checkoutData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="addressLine1"
          placeholder="Address Line 1"
          value={checkoutData.addressLine1}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="addressLine2"
          placeholder="Address Line 2 (Optional)"
          value={checkoutData.addressLine2}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={checkoutData.city}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={checkoutData.state}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          value={checkoutData.zipCode}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={checkoutData.country}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default AddressForm;
