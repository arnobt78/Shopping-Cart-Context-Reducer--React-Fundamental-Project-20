import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      {/* Product listing and learning content. */}
      <Route path="/" element={<Home />} />
      {/* Cart summary and selected item management. */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
