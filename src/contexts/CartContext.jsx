import React, { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();

export function useCartContext() {
  return useContext(cartContext);
}

const initState = {
  products: [],
  totalPrice: 0,
};

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(initState);

  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  function addProductToCart(product) {
    const data = getDataFromLS();
    data.products.push({
      ...product,
      count: 1,
      subPrice: parseFloat(product.price),
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    console.log("succed");
  }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    const isInCart = data.products.some((item) => item.id === id);
    return isInCart;
  }

  function deleteProductFromCart(id) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => item.id !== id);
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function increaseCount(id) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += +item.price;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function decreaseCount(id) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= +item.price;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  useEffect(() => {
    getCart();
    console.log(cart);
  }, []);

  const value = {
    cart,
    getCart,
    addProductToCart,
    isAlreadyInCart,
    deleteProductFromCart,
    increaseCount,
    decreaseCount,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
