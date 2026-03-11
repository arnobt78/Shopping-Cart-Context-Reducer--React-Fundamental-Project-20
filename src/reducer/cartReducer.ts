import type { CartAction, CartState } from "../types/cart";

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };
    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };
    default: {
      const exhaustiveTypeCheck: never = type;
      throw new Error(`No Case Found In cartReducer: ${exhaustiveTypeCheck}`);
    }
  }
};
