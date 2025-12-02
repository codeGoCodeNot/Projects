import Product from "./Components/Product";
import Landing from "./Components/Landing";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./Fetcher/fetcher";
import { type ProductProps } from "./Components/types";
import Login from "./Components/Login";
import { CartProvider } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  const onShowCart = () => setShowCart((prev) => !prev);
  const onShowProduct = (value?: boolean) =>
    setShowProduct((prev) => (typeof value === "boolean" ? value : !prev));
  const onShowLogin = () => setLogin((prev) => !prev);

  // data from api
  const { data: products } = useSuspenseQuery<ProductProps[]>({
    queryKey: ["products-list"],
    queryFn: () => get("products-list"),
  });

  return (
    <>
      <CartProvider products={products}>
        <div className="wrapper-gray">
          <div className="container">
            <Navbar
              onShowCart={onShowCart}
              onShowLogin={onShowLogin}
              onShowProduct={onShowProduct}
            />
          </div>
        </div>

        <div className="container page-wrapper">
          {showCart ? (
            <Cart />
          ) : showProduct ? (
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
          ) : login ? (
            <div>
              <Login />
            </div>
          ) : (
            <Landing onShowProduct={onShowProduct} />
          )}
        </div>
      </CartProvider>
    </>
  );
}

export default App;
