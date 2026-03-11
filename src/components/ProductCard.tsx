import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/cart";
import "./ProductCard.css";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const { id, name, price, image } = product;

  // Compute whether the current product already exists in cart.
  const isInCart = useMemo(() => {
    return cartList.some((cartItem) => cartItem.id === id);
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          // If already in cart, allow removal.
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          // Otherwise allow adding to cart.
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
