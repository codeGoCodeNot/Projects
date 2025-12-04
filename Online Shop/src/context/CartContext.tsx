import { createContext, useState, type ReactNode } from "react";
import type { ProductProps } from "../Components/types";
import type { CartProps } from "../Components/Cart";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartProps | null>(null);

type CartProviderProps = {
  children: ReactNode;
  products?: ProductProps[];
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const handleAddProduct = (product: ProductProps) => {
    setCart((prev) => {
      const existing = prev.find((prod) => prod.id === product.id);
      if (existing) {
        // Increase quantity
        return prev.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      } else {
        // Add new product with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCart((prev) =>
      prev
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const cartSum = cart.reduce(
    (total, product) => total + product.final_price * product.quantity,
    0
  );

  return (
    <CartContext
      value={{
        cart,
        handleAddProduct,
        handleRemoveProduct,
        cartSum,
      }}
    >
      {children}
    </CartContext>
  );
};
