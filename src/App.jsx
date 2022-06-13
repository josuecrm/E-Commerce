import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Purchases, Login, ProductDetail } from "./pages";
import { Loader, NavBar, ProtectedRoutes } from "./components";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
