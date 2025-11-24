import products from "./data";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(products);

  const handleAddProduct = (id: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemoveProduct = (id: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <div className="cart-wrapper">
      <h1>Your cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="cart-product">
          <img
            src={product.thumbnail}
            alt={product.name}
            width="126"
            height="84"
          />
          <div className="cart-product-details">
            <div className="cart-product-name">
              <p>{product.name}</p>
              <ul className="cart-buttons">
                <li>{product.quantity}</li>
                <li>
                  <button onClick={() => handleAddProduct(product.id)}>
                    +
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    disabled={product.quantity === 0}
                  >
                    -
                  </button>
                </li>
              </ul>
            </div>
            <p>${((product.price / 100) * product.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
