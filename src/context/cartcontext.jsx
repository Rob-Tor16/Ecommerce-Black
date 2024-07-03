import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  // Cargar el carrito desde localStorage al inicializar
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const deleteItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
  };

  const quantityInCart = () => {
    return cart.reduce((acc, producto) => acc + producto.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, total, quantityInCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};