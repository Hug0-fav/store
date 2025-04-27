import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  let storedCart = [];
  try {
    const data = localStorage.getItem("cart");
    storedCart = data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    storedCart = [];
  }

  const [cartItems, setCartItems] = useState(storedCart);

  // const [cartItems, setCartItems] = useState(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   return storedCart ? JSON.parse(storedCart) : [];
  // });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(id) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCartItems(
      (items) =>
        items
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // Remove if quantity is 0
    );
  }

  function handleDelete(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  const value = {
    cartItems,
    addToCart,
    cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    incrementQuantity,
    decrementQuantity,
    handleDelete,
    totalPrice: cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
    clearCart: () => setCartItems([]),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
