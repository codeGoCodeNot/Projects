import type { ProductProps } from "./data";

type CartProps = {
  cart: ProductProps[];
  onAddProduct: (id: number) => void;
  onRemoveProduct: (id: number) => void;
};

const Cart = ({ cart, onAddProduct, onRemoveProduct }: CartProps) => {
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
                  <button onClick={() => onAddProduct(product.id)}>+</button>
                </li>
                <li>
                  <button
                    onClick={() => onRemoveProduct(product.id)}
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
