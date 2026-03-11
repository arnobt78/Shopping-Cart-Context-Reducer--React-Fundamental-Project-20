# Shopping Cart Context Reducer - React, Vite, TypeScript, Custom CSS Fundamental Project 20

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.2-CA4245)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3)](https://eslint.org/)

A beginner-friendly, production-ready learning app that demonstrates modern React state management using **Context API + useReducer** with a **Vite + TypeScript** setup. It helps learners understand how data flows across components, how actions update shared state, and how to build reusable UI modules without Redux.

- **Live Demo:** [https://shopping-cart-context-reducer.vercel.app/](https://shopping-cart-context-reducer.vercel.app/)

<img width="1517" height="863" alt="Screenshot 2026-03-11 at 16 43 14" src="https://github.com/user-attachments/assets/4db709d3-fc1a-4776-ac2f-6ebcf2c5d155" />
<img width="1435" height="754" alt="Screenshot 2026-03-11 at 16 43 22" src="https://github.com/user-attachments/assets/798001cd-2134-4854-b366-6bae3744c361" />

## Table of Contents

1. [Project Overview](#project-overview)
2. [Core Features](#core-features)
3. [Technology Stack](#technology-stack)
4. [Project Architecture](#project-architecture)
5. [Project Structure](#project-structure)
6. [Routing & Pages](#routing--pages)
7. [State Management Walkthrough](#state-management-walkthrough)
8. [Components Walkthrough](#components-walkthrough)
9. [How to Run the Project](#how-to-run-the-project)
10. [Environment Variables (.env)](#environment-variables-env)
11. [Available Scripts](#available-scripts)
12. [Dependencies Explained](#dependencies-explained)
13. [Keywords & Concepts](#keywords--concepts)
14. [Code Examples](#code-examples)
15. [How to Reuse in Other Projects](#how-to-reuse-in-other-projects)
16. [Backend / API Notes](#backend--api-notes)
17. [Learning Path for Beginners](#learning-path-for-beginners)
18. [Conclusion](#conclusion)

---

## Project Overview

This project is a frontend shopping cart application focused on teaching:

- How to model app state with TypeScript types.
- How to manage global state with Context API.
- How to update state predictably with useReducer actions.
- How to build a simple, maintainable React architecture.

It includes two pages (`Home` and `Cart`), product listing cards, cart item cards, a sticky navigation header, and educational UI messaging for learning.

---

## Core Features

- Global state management using React Context API and useReducer
- Add to cart / remove from cart functionality
- Real-time cart total updates
- Typed actions and reducer state (TypeScript)
- Reusable components with isolated CSS files
- Responsive and modern UI sections for beginner learning
- Routing via React Router DOM
- Empty cart educational state with CTA

---

## Technology Stack

- **Vite**: Fast dev server + optimized production bundling.
- **React 19**: Component-driven UI and hooks.
- **TypeScript**: Static typing for safer, scalable code.
- **React Router DOM 7**: Client-side routing (`/` and `/cart`).
- **Context API + useReducer**: Global state and predictable updates.
- **ESLint 9 + TypeScript ESLint**: Code quality and consistency.
- **Custom CSS**: Component-level styling and global layout theming.

---

## Project Architecture

The app follows a clean layered frontend structure:

1. **Presentation Layer**: `components/` and `pages/` render UI.
2. **State Layer**: `context/CartContext.tsx` exposes global cart actions/state.
3. **Update Logic Layer**: `reducer/cartReducer.ts` handles state transitions.
4. **Types Layer**: `types/cart.ts` defines Product, State, and Action contracts.
5. **Routing Layer**: `routes/AllRoutes.tsx` maps URL paths to page components.

---

## Project Structure

```bash
shopmate-context-reducer/
├── public/
│   └── assets/
│       ├── images/
│       └── vite.svg
├── src/
│   ├── components/
│   │   ├── CartCard.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartCard.css
│   │   ├── Header.css
│   │   ├── ProductCard.css
│   │   └── index.ts
│   ├── context/
│   │   └── CartContext.tsx
│   ├── hooks/
│   │   └── useTitle.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Cart.tsx
│   │   └── index.ts
│   ├── reducer/
│   │   └── cartReducer.ts
│   ├── routes/
│   │   └── AllRoutes.tsx
│   ├── types/
│   │   └── cart.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Routing & Pages

- `/` -> `Home.tsx`
- `/cart` -> `Cart.tsx`

Route setup is centralized in `src/routes/AllRoutes.tsx` for easy extension.

---

## State Management Walkthrough

`CartContext.tsx` is the global state gateway.

1. Initializes cart state:

- `cartList: Product[]`
- `total: number`

1. Exposes actions:

- `addToCart(product)`
- `removeFromCart(product)`

1. Recalculates totals via `updateTotal(products)`.

2. Dispatches typed reducer actions:

- `ADD_TO_CART`
- `REMOVE_FROM_CART`
- `UPDATE_TOTAL`

`cartReducer.ts` receives typed actions and returns the next state.

---

## Components Walkthrough

`Header.tsx`

- Shows app logo/title, route navigation, and live cart count.

`ProductCard.tsx`

- Renders product info and toggles Add/Remove button based on cart presence.

`CartCard.tsx`

- Renders selected cart product and supports removal.

`Home.tsx`

- Provides educational intro, learning panel, and product listing.

`Cart.tsx`

- Displays cart summary, educational message, and empty-state experience.

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/arnobt78/Shopping-Cart-Context-Reducer--React-Fundamental-Project-20.git
cd Shopping-Cart-Context-Reducer--React-Fundamental-Project-20
```

---

### 2. Install Dependencies

This project expects Node `20.x`.

```bash
npm install
```

---

### 3. Run in Development Mode

```bash
npm run dev
```

Open the local URL shown by Vite (commonly `http://localhost:5173`).

---

### 4. Build for Production

```bash
npm run build
```

---

### 5. Preview Production Build

```bash
npm run preview
```

---

## Environment Variables (.env)

This project currently does **not require any environment variables** to run.

- No `.env` file is needed for local development or production build.
- No API keys, backend URLs, or secrets are required.

Optional future setup (if you extend this project):

```bash
# .env (example for future use)
VITE_APP_TITLE="Shopping Cart Context Reducer"
VITE_API_BASE_URL="https://api.example.com"
```

Important notes:

- In Vite, only variables prefixed with `VITE_` are exposed to client code.
- Access them using `import.meta.env.VITE_SOME_KEY`.

---

## Available Scripts

| Script            | Purpose                                                  |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Starts Vite development server                           |
| `npm run build`   | Type checks with TypeScript and builds production assets |
| `npm run preview` | Serves the built app locally for preview                 |
| `npm run lint`    | Runs ESLint across the project                           |

---

## Dependencies Explained

`react`

- Core UI library for components and rendering.

`react-dom`

- Bridges React components to the browser DOM.

`react-router-dom`

- Handles navigation and route rendering.

`typescript`

- Adds static typing and safer refactoring.

`vite` and `@vitejs/plugin-react`

- Fast development startup and optimized production builds.

`eslint`, `@typescript-eslint/*`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

- Linting stack for code quality and React hook correctness.

---

## Keywords & Concepts

- **Context API**: Share state across nested components without prop drilling.
- **Reducer Pattern**: Centralize state transitions using typed action objects.
- **Immutable Update**: Avoid direct state mutation by returning new objects/arrays.
- **Single Source of Truth**: Cart state lives in one provider and is consumed everywhere.
- **Derived State**: Cart total is computed from cart items.
- **Custom Hook (`useTitle`)**: Encapsulates repeated page-title logic.
- **Type Narrowing with Unions**: Ensures action safety in reducer switch cases.

---

## Code Examples

### Typed Reducer Actions

```ts
export type CartAction =
  | { type: "ADD_TO_CART"; payload: { products: Product[] } }
  | { type: "REMOVE_FROM_CART"; payload: { products: Product[] } }
  | { type: "UPDATE_TOTAL"; payload: { total: number } };
```

---

### Provider Usage in App Bootstrap

```tsx
createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>,
);
```

---

### Product Card Add/Remove Toggle

```tsx
const isInCart = useMemo(() => {
  return cartList.some((cartItem) => cartItem.id === id);
}, [cartList, id]);
```

---

## How to Reuse in Other Projects

You can reuse this architecture in any small/medium React app:

1. Copy `types/cart.ts` and adapt the domain models.
2. Copy `CartContext.tsx` and rename to your feature (e.g., `AuthContext`).
3. Copy reducer pattern from `cartReducer.ts`.
4. Replace Product/Cart components with your own UI components.
5. Keep actions descriptive and typed for maintainability.

---

## Backend / API Notes

- This is a **frontend-only project**.
- There is **no backend server** in this repository.
- There are **no API endpoints** consumed currently.
- Product data is currently hardcoded in `Home.tsx` for learning simplicity.

If you want to add backend integration later, recommended next step:

- Move product data to an API and fetch it in `Home.tsx`.
- Keep cart state in context or sync to backend for persistence.

---

## Learning Path for Beginners

1. Run the app and browse `Home` and `Cart` pages.
2. Read `types/cart.ts` first to understand data shape.
3. Read `CartContext.tsx` to learn provider/action flow.
4. Read `cartReducer.ts` to understand pure state transitions.
5. Read `ProductCard.tsx` and `CartCard.tsx` to learn UI-to-state interaction.
6. Extend with a new feature (quantity, clear cart, or persistence).

---

## Functionalities Summary

- List products with image, name, and price.
- Add/remove products from shared cart state.
- Auto-calculate total amount.
- Show real-time cart count in navbar.
- Show educational empty cart state with CTA.
- Use route-level page titles via custom hook.

---

## Important Files Quick Guide

`src/main.tsx`

- App bootstrap, router setup, provider wrapping.

`src/context/CartContext.tsx`

- Global cart state and cart operations.

`src/reducer/cartReducer.ts`

- Pure reducer logic for cart actions.

`src/pages/Home.tsx`

- Product list + educational content.

`src/pages/Cart.tsx`

- Cart summary, empty-state education, cart item rendering.

`src/components/Header.tsx`

- Sticky navigation + cart item count.

`index.html`

- SEO metadata for better discoverability.

---

## Best Practices Demonstrated

- Type-safe state management.
- Single-responsibility modules.
- Reusable components.
- Predictable reducer updates.
- Simple route architecture.
- Build + lint ready project workflow.

---

## Conclusion

This project is a clean educational template for learning modern React fundamentals with TypeScript. It balances practical architecture with beginner-friendly implementation, making it ideal for developers who want to learn Context + Reducer deeply and reuse this pattern in real-world apps.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
