import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  toggleCartItem: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  totalQuantity: 0,
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const price = cart.reduce((acc, item) => acc + Number(item.price), 0);
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    setTotalPrice(price);
    setTotalQuantity(quantity);
  }, [cart]);

  const addToCart = (newItem, from = "") => {
    const existingItem = cart.find((item) => item.id === newItem.id);
    const basePrice = Number(newItem.price); // Ensure basePrice is a number

    if (!existingItem) {
      newItem.quantity = 1;
      newItem.price = basePrice; // Ensure price is a number
      setCart((prevCart) => [...prevCart, newItem]);
    } else {
      if (from !== "") {
        if (from === "cartIncrease") {
          existingItem.price = Number(existingItem.price) + basePrice;
          existingItem.quantity += 1;
        } else {
          existingItem.price = Number(existingItem.price) - basePrice;
          existingItem.quantity -= 1;
        }
        setTotalPrice(cart.reduce((acc, item) => acc + Number(item.price), 0));
        setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
        return;
      } else {
        existingItem.quantity += 1;
        existingItem.price = Number(existingItem.price) + basePrice;
      }
    }

    setCart([...cart]);
    setTotalPrice(cart.reduce((acc, item) => acc + Number(item.price), 0));
    setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  };

  const toggleCartItem = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex === -1) {
        return [...prevCart, item];
      } else {
        return prevCart.filter((_, index) => index !== existingItemIndex);
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    toggleCartItem,
    removeFromCart,
    emptyCart,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
