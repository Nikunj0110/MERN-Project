// File: src/pages/DeliveryInfo.jsx
import React, { useContext, useState } from "react";
import { FaIntercom, FaMoneyBillWave, FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CartTotal from "../component/CartTotal";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const states = ["Gujarat", "Maharashtra", "Rajasthan", "Delhi"];
const countries = ["India", "USA", "Canada"];

function DeliveryInfo() {
  let [method, setMethod] = useState("cod");
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  let { cartItem, setCartItem, getCartAmount, delivery_fee, products } =
    useContext(shopDataContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((data) => ({ ...data, [name]: value }));
  };

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value) newErrors[key] = "Required";
    });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Invalid pincode";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Invalid phone";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      let orderItems = [];

      for (const items in cartItem) {
        if (cartItem[items] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItem[items]; // ✅ fixed this too
            orderItems.push(itemInfo);
          }
        }
      }

      // ✅ define orderData OUTSIDE the loop
      let orderData = {
        address: form,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: method,
      };

      // ✅ send directly (no wrapper object)
      switch (method) {
        case "cod":
          const result = await axios.post(
            serverUrl + "/api/order/placeorder",
            orderData,
            { withCredentials: true }
          );
          console.log(result.data);
      toast.success("Order Placed")



          if (result.data) {
            setCartItem({}); // ✅ clear cart from state
            navigate("/order");
          } else {
            console.log(result.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error("Order Place Failed")
    }
  };

  return (
    <div className="bg-white min-h-screen p-6 md:p-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6"
      >
        {/* Left Column - Form */}
        <div className="flex-1 pt-10 space-y-4">
          <h2 className="text-xl font-bold">Delivery Information</h2>

          <div className="flex gap-[30px]">
            <div className="w-full">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <div className="flex gap-[30px]">
            <div className="w-full">
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.city && (
                <p className="text-sm text-red-500">{errors.city}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1">Pincode</label>
              <input
                type="tel"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              />
              {errors.pincode && (
                <p className="text-sm text-red-500">{errors.pincode}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="flex gap-[30px]">
            <div className="w-full">
              <label className="block mb-1">State</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-sm text-red-500">{errors.state}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-sm text-red-500">{errors.country}</p>
              )}
            </div>
          </div>
        </div>
        {/* Right Column - Summary */}
        <div className="w-full md:w-[40%] pt-8 pb-20 space-y-6">
          {/* Cart Summary */}
          <CartTotal />

          {/* Payment Methods */}
          <div className="shadow-md p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setMethod("cod")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transform transition-all duration-200 ${
                  form.payment === "COD"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200"
                } hover:scale-105`}
              >
                <FaMoneyBillWave /> Cash on Delivery
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, payment: "GPay" })}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transform transition-all duration-200 ${
                  form.payment === "GPay"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100"
                } hover:scale-105`}
              >
                <FcGoogle /> Google Pay
              </button>
            </div>
            {errors.payment && (
              <p className="text-sm text-red-500 mt-1">{errors.payment}</p>
            )}
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryInfo;
