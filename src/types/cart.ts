// Product model used in Home product list and Cart state.
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// Global cart state shape managed by context + reducer.
export type CartState = {
  cartList: Product[];
  total: number;
};

export type AddToCartAction = {
  type: "ADD_TO_CART";
  payload: {
    products: Product[];
  };
};

export type RemoveFromCartAction = {
  type: "REMOVE_FROM_CART";
  payload: {
    products: Product[];
  };
};

export type UpdateTotalAction = {
  type: "UPDATE_TOTAL";
  payload: {
    total: number;
  };
};

// Union keeps reducer actions strictly typed and exhaustive.
export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateTotalAction;
