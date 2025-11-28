import Product from "./Components/Product";
import Landing from "./Components/Landing";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "./Fetcher/fetcher";
import { type ProductProps } from "./Components/types";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<boolean>(false);

  const [cart, setCart] = useState<ProductProps[]>([]);

  const onAddProduct = (id: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const onRemoveProduct = (id: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const onShowCart = () => setShowCart((prev) => !prev);
  const onShowProduct = () => setShowProduct((prev) => !prev);

  // data from api
  const { data: products } = useSuspenseQuery<ProductProps[]>({
    queryKey: ["products-list"],
    queryFn: () => get("products-list"),
  });

  // sync cart with loaded products
  useEffect(() => {
    if (products && cart.length === 0)
      setCart(products.map((p) => ({ ...p, quantity: 0 })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <>
      <div className="wrapper-gray">
        <div className="container">
          <Navbar onShowCart={onShowCart} cart={cart} />
        </div>
      </div>

      <div className="container page-wrapper">
        {showCart ? (
          <Cart
            cart={cart}
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
          />
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
        ) : (
          <Landing onShowProduct={onShowProduct} />
        )}
      </div>
    </>
  );
}

export default App;
