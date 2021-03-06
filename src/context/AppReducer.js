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
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[index].amount = action.payload.amount;
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
    case "UPDATE_TOTAL":
      return {
        ...state,
        totalSum: state.cartItems.reduce(
          (sum, item) => sum + item.amount * item.price,
          0
        ),
      };
    case "UPDATE_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "UPDATE_LOGININFO":
      return {
        ...state,
        loginInfo: { ...action.payload },
      };
    case "DELETE_CART_NOTE":
      return {
        ...state,
        cartNote: state.cartItems.cartNote = [],
      };
    default:
      return state;
  }
}

export default AppReducer;
