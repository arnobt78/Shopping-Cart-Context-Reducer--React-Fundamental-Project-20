import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import { cartReducer } from "../reducer/cartReducer";
import type { CartState, Product } from "../types/cart";

type CartContextValue = CartState & {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const initialState: CartState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext<CartContextValue | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const updateTotal = (products: Product[]): void => {
    const total = products.reduce((acc, product) => acc + product.price, 0);

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const addToCart = (product: Product): void => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product: Product): void => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id,
    );
    updateTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const value: CartContextValue = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};
