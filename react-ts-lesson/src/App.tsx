import Product from "./Components/Product";
import products from "./Components/data";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<boolean>(false);

  const onShowCart = () => setShowCart((prev) => !prev);
  const onShowProduct = () => setShowProduct((prev) => !prev);

  return (
    <>
      <div className="wrapper-gray">
        <div className="container">
          <Navbar onShowCart={onShowCart} />
        </div>
      </div>
      <div className="container page-wrapper">
        {showCart ? (
          <Cart />
        ) : showProduct ? (
          <div className="products-grid">
            {products.map((product) => (
              <Product key={product.id} details={product} />
            ))}
          </div>
        ) : (
          <Landing onShowProduct={onShowProduct} />
        )}
      </div>
    </>
  );
}

export default App;
