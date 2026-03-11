import type { CartAction, CartState } from "../types/cart";

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  const { type, payload } = action;

  // Reducer maps action types to predictable immutable state updates.
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };
    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };
    default: {
      // Exhaustive check helps catch unhandled action types during development.
      const exhaustiveTypeCheck: never = type;
      throw new Error(`No Case Found In cartReducer: ${exhaustiveTypeCheck}`);
    }
  }
};
