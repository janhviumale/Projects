import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
    const { orders } = useContext(ShopContext);

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold text-center mb-6">My Orders</h2>
            
            {orders.length > 0 ? (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="border p-4 rounded-lg shadow">
                            {/* Display Order Number */}
                            <p className="text-lg font-semibold text-gray-700">
                                Order #{order.orderNumber}
                            </p>

                            {/* Display Order ID and Date */}
                            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                            <p className="text-sm text-gray-500">
                                Date: {new Date(order.date).toLocaleString()}
                            </p>

                            {/* Display Items */}
                            <ul className="mt-4 space-y-2">
                                {order.items.map((item) => (
                                    <li key={item._id} className="flex items-center justify-between">
                                        {/* Product Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-lg mr-4"
                                        />

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <span className="block">
                                                {item.name} x {item.quantity}
                                            </span>
                                        </div>

                                        {/* Total Price */}
                                        <span>
                                            {new Intl.NumberFormat('en-IN', {
                                                style: 'currency',
                                                currency: 'INR',
                                            }).format(item.price * item.quantity)}
                                        </span>
                                    </li>
                                ))}
                            </ul>


                            {/* Display Total Price */}
                            <p className="font-bold mt-4 text-right">
                                Total: ₹{order.totalPrice.toFixed(2)}
                            </p>
                        </div>

                        
                        
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No orders yet.</p>
            )}
        </div>
    );
};

export default Orders;
