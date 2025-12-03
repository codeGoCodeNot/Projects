import Product from "./Components/Product";
import Landing from "./Components/Landing";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./Fetcher/fetcher";
import { type ProductProps } from "./Components/types";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { data: products } = useSuspenseQuery<ProductProps[]>({
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
              element={
                <>
                  <div className="products-title">
                    <h1>Products</h1>
                  </div>
                  <div className="products-grid">
                    {products.map((product) => (
                      <Product key={product.id} details={product} />
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
