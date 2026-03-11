import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App";

// Grab the mount point created in index.html.
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    {/* Router provides URL-based page navigation. */}
    <Router>
      {/* CartProvider makes cart state/actions available globally. */}
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>,
);
