import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/collections/:categoryName"
              element={<CategoryDetailPage />}
            />
            <Route
              path="/collections/:categoryName/product/:productName"
              element={<ProductDetailPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
