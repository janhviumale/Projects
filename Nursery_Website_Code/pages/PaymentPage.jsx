import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

const PaymentPage = () => {
  const { cartItems, products, delivery_fee, handling_fee } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Populate cartData based on cartItems
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
    console.log("Updated cartData:", tempData); // Debugging line to check cartData
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

  // Debugging line to check cart state
  console.log("cartItems:", cartItems);
  console.log("products:", products);
  console.log("finalPrice:", finalPrice);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Payment Page</h2>
      
      {cartData.length > 0 ? (
        <>
          {/* Display Cart Items */}
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

            {/* Payment Button */}
            <div className="flex justify-center mt-6">
              <a
                href={`https://pages.razorpay.com/pl_PBmMOKPC05GIX4/view?amount=${finalPrice}`}
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
              >
                Proceed to Pay {formatCurrency(finalPrice)}
              </a>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No items to pay for. Add something to your cart!</p>
      )}
    </div>
  );
};

export default PaymentPage;
