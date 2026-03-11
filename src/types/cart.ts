export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

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

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateTotalAction;
