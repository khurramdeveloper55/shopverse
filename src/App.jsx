import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
