import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  // Cart count in header updates automatically from shared state.
  const { cartList } = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/assets/vite.svg" alt="Shopmate Logo" />
        <span>Context Reducer</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
