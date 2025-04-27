import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Product from "./page/Product";
import ProductDetails from "./page/ProductDetails";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Login from "./page/Login";
import History from "./page/History";

import Signup from "./page/Signup";
import Success from "./page/Success";
import Cancel from "./page/Cancel";
import Category from "./page/Category";

import { CartProvider } from "./component/CartContext";
import ProtectedRoute from "./component/ProtectedRoute";
import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResults from "./component/Filter";
import ForgotPassword from "./component/ForgotPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route index path="/products" element={<Product />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
