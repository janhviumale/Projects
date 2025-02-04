import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 99;
    const handling_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [orders, setOrders] = useState([]);

    const addToCart = (itemId) => {
        const updatedCartItems = structuredClone(cartItems);

        if (updatedCartItems[itemId]) {
            updatedCartItems[itemId] += 1; 
        } else {
            updatedCartItems[itemId] = 1;
        }

        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems({});
      };
      

    const addOrder = (order) => {
        setOrders((prevOrders) => {
            const orderWithNumber = {
                ...order,
                orderNumber: prevOrders.length + 1,
            };
            return [...prevOrders, orderWithNumber,]; 
        });
    };


    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
        return totalCount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        handling_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        orders,
        addOrder,
        clearCart
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
