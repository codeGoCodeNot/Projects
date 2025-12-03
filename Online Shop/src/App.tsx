import Landing from "./Components/Landing";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./Fetcher/fetcher";
import { type ProductProps } from "./Components/types";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsGrid from "./Components/Products/ProductsGrid";
import ProductDetails from "./Components/Products/ProductDetails";

function App() {
  const { data: products = [] } = useSuspenseQuery<ProductProps[]>({
    queryKey: ["products-list"],
    queryFn: () => get("products-list"),
  });

  return (
    <BrowserRouter>
      <CartProvider products={products}>
        <div className="wrapper-gray">
          <div className="container">
            <Navbar />
          </div>
        </div>
        <div className="container page-wrapper">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/products"
              element={<ProductsGrid products={products} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>This page was not found.</h1>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
