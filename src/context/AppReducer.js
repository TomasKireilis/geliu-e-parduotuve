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
    default:
      return state;
  }
}

export default AppReducer;
