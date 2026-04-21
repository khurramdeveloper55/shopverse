import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
  useIsMutating,
} from "@tanstack/react-query";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Collections from "./pages/Collections";
import ScrollToTop from "./components/ScrollToTop";
import GlobalLoader from "./components/GlobalLoader";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "./redux/slices/loadingSlice";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function ReactQueryLoaderHandler() {
  const dispatch = useDispatch();
  const isFetching = useIsFetching();
  const hasInitialLoadCompleted = useRef(false);

  useEffect(() => {
    if (isFetching > 0 && !hasInitialLoadCompleted.current) {
      dispatch(startLoading("Loading..."));
    } else if (isFetching === 0) {
      dispatch(stopLoading());
      if (!hasInitialLoadCompleted.current) {
        hasInitialLoadCompleted.current = true;
      }
    }
  }, [isFetching, dispatch]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <GlobalLoader /> */}
      {/* <ReactQueryLoaderHandler /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<Collections />} />
            <Route
              path="/collections/:categoryName"
              element={<CategoryDetailPage />}
            />
            <Route
              path="/collections/:categoryName/product/:productName"
              element={<ProductDetailPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
