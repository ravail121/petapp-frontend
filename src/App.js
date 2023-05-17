import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Shop from "./Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Footer from "./shared/Footer";
import About from "./About";
import Product from "./pages/Products";
import ProductDetails from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productsDetails" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
