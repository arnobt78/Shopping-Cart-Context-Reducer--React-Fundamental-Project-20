import { Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Shared navigation stays visible across all pages. */}
      <Header />
      {/* Route outlet for Home and Cart pages. */}
      <AllRoutes />
    </div>
  );
}

export default App;
