import React, { createContext, useContext, useState } from 'react';

// Crie o contexto do carrinho
const CartContext = createContext();

// Crie um componente de provedor para fornecer o contexto do carrinho aos componentes
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemsExist = prevItems.find((item) => item.id === product.id);
      if (itemsExist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>;
};

// Crie um hook personalizado para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
