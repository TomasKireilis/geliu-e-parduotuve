import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  cartItems: [ { id: 1, image: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    title: 'Kaktusas', price: 5.99, amount: 4 },
    { id: 2, image: 'https://www.ikea.com/gb/en/images/products/smycka-artificial-flower-rose-red__0636963_pe698124_s5.jpg', title: 'Rožės', price: 25.50, amount: 2 },
    { id: 3, image: 'https://i.pinimg.com/564x/18/4b/61/184b61bfe08b19ee4f4e07d605673d6f.jpg', title: 'Prabangi puokste', price: 100, amount: 1 },
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteItem(id) {
      try {
        // await axios.delete(`/api/cartIems/${id}`);
          dispatch({
            type: 'DELETE_ITEM',
            payload: id,
        });
      }
       catch (error) {
        // dispatch({
        //   type: 'ITEM_DELETE_ERROR',
        //   payload: error.response.data.error,
        // });
       }
    }

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        deleteItem
      }}  
    >
      {children}
    </GlobalContext.Provider>
  );
};  