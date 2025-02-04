import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    setCartItems,
    delivery_fee,
    handling_fee,
    addOrder,
    clearCart,  
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((p) => p._id === itemId);
        if (product) {
          tempData.push({
            ...product,
            quantity: cartItems[itemId],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);

  // Calculate total price of items
  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate final price with fees
  const finalPrice = totalPrice + delivery_fee + handling_fee;

  // Handle Razorpay payment initiation
  const initiatePayment = () => {
    const options = {
      key: "rzp_test_Pb9MMyzhfyxcSy",
      amount: finalPrice * 100,
      currency: "INR",
      name: "Your Company",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);

        // Add the order
        const newOrder = {
          id: response.razorpay_payment_id,
          items: cartData,
          totalPrice: finalPrice,
          date: new Date().toISOString(),
        };
        // Add the order to the orders context
        addOrder(newOrder);

        // Clear the cart
        clearCart();

        // Redirect to the orders page
        navigate("/order");
      },
      theme: {
        color: "#759867",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    if (Object.keys(cartItems).length === 0) {
      // Cart is empty, redirect to orders page
      navigate("/order");
    }
  }, [cartItems, navigate]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>
      {cartData.length > 0 ? (
        <>
          <div className="space-y-4">
            {cartData.map((item) => (
              <div
                key={item._id}
                className="flex items-center border-b border-gray-200 pb-4 last:border-b-0"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>

                {/* Item Final Price */}
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-700">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-6 border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-md">
            <div className="space-y-4">
              {/* Total Section */}
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Items Total:</p>
                <p className="text-lg">{formatCurrency(totalPrice)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Delivery Fee:</p>
                <p className="text-lg">{formatCurrency(delivery_fee)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Handling Fee:</p>
                <p className="text-lg">{formatCurrency(handling_fee)}</p>
              </div>
              <div className="flex justify-between border-t pt-4 mt-4">
                <h3 className="text-xl font-bold">Total:</h3>
                <h3 className="text-xl font-bold">{formatCurrency(finalPrice)}</h3>
              </div>
            </div>

            {/* Centered Payment Button */}
            <div className="flex justify-center mt-6">
              <button
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
                onClick={initiatePayment}
              >
                Make Payment
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
