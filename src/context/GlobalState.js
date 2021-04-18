import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cartItems: [],
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

  function updateCart(newItem) {
    try {
      const index = state.cartItems.findIndex(existingItem => { return existingItem.id === newItem.id })
      if(index >= 0) {
        updateItemAmount(state.cartItems[index].id, (+state.cartItems[index].amount)+1)
      } else {
        dispatch({
          type: "UPDATE_CART",
          payload: newItem,
        });
      }  
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
        updateTotal,
        updateCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
