import type { ProductProps } from "./types";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export type CartProps = {
  cart: ProductProps[];
  handleAddProduct: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
};

const Cart = () => {
  const context = useContext<CartProps | null>(CartContext);

  if (!context) return <div>No cart context available</div>;
  const { cart, handleAddProduct, handleRemoveProduct } = context;

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
                    style={{
                      cursor:
                        product.quantity === 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    -
                  </button>
                </li>
              </ul>
            </div>
            <p>
              ${((product.final_price / 100) * product.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
