import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");
  const isCartEmpty = cartList.length === 0;

  return (
    <main className="cartPage">
      <section className="heroCard">
        <p className="eyebrow">Cart Learning Panel</p>
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        <p className="heroText">
          This page reflects Redux state. Every add/remove action from product
          cards updates this summary instantly.
        </p>
      </section>

      <section className="cart">
        {isCartEmpty ? (
          <div className="emptyState" role="status" aria-live="polite">
            <h3>Your cart is empty</h3>
            <p>
              Add some items from the Home page to practice cart state updates
              and see how data flows between components.
            </p>
            <Link className="emptyCta" to="/">
              Browse Products
            </Link>
          </div>
        ) : (
          cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  );
};
