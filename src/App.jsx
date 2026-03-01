
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import ProductPage from "./components/ShopPages/ProductPage";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ProductPage />} />
        <Route path="/Cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}