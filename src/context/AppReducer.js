function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "ADD_BASKET":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "UPDATE_ITEM_AMOUNT": {
      for (var i in state.cartItems) {
        if (state.cartItems[i].id === action.payload.id) {
          state.cartItems[i].amount = action.payload.amount;
          break;
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    }
    case "UPDATE_CART_NOTE":
      return {
        ...state,
        cartNote: action.payload.text,
      };
    default:
      return state;
  }
}

export default AppReducer;
