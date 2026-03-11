import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import type { Product } from "../types/cart";

const products: Product[] = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "/assets/images/1001.png",
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: "/assets/images/1002.png",
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: 179,
    image: "/assets/images/1003.png",
  },
  {
    id: 4,
    name: "Logitech H111 Wired",
    price: 39,
    image: "/assets/images/1004.png",
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: "/assets/images/1005.png",
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: "/assets/images/1006.png",
  },
];

export const Home = () => {
  useTitle("Home");

  return (
    <main>
      <section className="heroCard">
        <p className="eyebrow">Beginner Friendly Project</p>
        <h2>Learn React Context + Reducer by Building a Shopping Cart</h2>
        <p className="heroText">
          This demo helps you practice global state management without Redux.
          Explore products, add items to cart, and observe how shared state
          updates across pages.
        </p>
      </section>

      <section className="learnPanel" aria-label="Learning guide">
        <h2>What You Are Practicing</h2>
        <p>
          Context API shares app-wide data, while <code>useReducer</code> keeps
          cart operations predictable. Try adding and removing products to
          understand action-driven state updates.
        </p>
      </section>

      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
