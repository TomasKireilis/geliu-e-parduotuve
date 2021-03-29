import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cartItems: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1554631221-f9603e6808be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      title: "Kaktusas",
      price: 5.99,
      amount: 4,
    },
    {
      id: 2,
      image:
        "https://www.ikea.com/gb/en/images/products/smycka-artificial-flower-rose-red__0636963_pe698124_s5.jpg",
      title: "Rožės",
      price: 25.5,
      amount: 2,
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/18/4b/61/184b61bfe08b19ee4f4e07d605673d6f.jpg",
      title: "Prabangi puokste",
      price: 100,
      amount: 1,
    },
  ],
  cartNote: "",
  totalSum: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteItem(id) {
    try {
      dispatch({
        type: "DELETE_ITEM",
        payload: id,
      });
    } catch (error) {}
  }

  function updateItemAmount(id, amount) {
    try {
      dispatch({
        type: "UPDATE_ITEM_AMOUNT",
        payload: { id, amount },
      });
    } catch (error) {}
  }

  function updateCartNote(text) {
    try {
      dispatch({
        type: "UPDATE_CART_NOTE",
        payload: { text },
      });
    } catch (error) {}
  }

  function updateTotal() {
    try {
      dispatch({
        type: "UPDATE_TOTAL",
      });
    } catch (error) {}
  }

  useEffect(() => {
    const cart = localStorage.getItem("my-shopping-cart");
    if (cart) {
      try {
        dispatch({
          type: "ADD_BASKET",
          payload: JSON.parse(cart),
        });
      } catch (error) {}
    }

    const note = localStorage.getItem("my-shopping-cart-note");
    if (note) {
      try {
        updateCartNote(note);
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-shopping-cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem("my-shopping-cart-note", state.cartNote);
  }, [state.cartNote]);

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        deleteItem,
        updateItemAmount,
        cartNote: state.cartNote,
        updateCartNote,
        totalSum: state.totalSum,
        updateTotal
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
