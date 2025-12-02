import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ProductProps } from "../Components/types";
import type { CartProps } from "../Components/Cart";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartProps | null>(null);

type CartProviderProps = {
  children: ReactNode;
  products?: ProductProps[];
};

export const CartProvider = ({ children, products }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  // sync cart with loaded products
  useEffect(() => {
    if (products && cart.length === 0)
      setCart(products.map((p) => ({ ...p, quantity: 0 })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

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
    <CartContext value={{ cart, handleAddProduct, handleRemoveProduct }}>
      {children}
    </CartContext>
  );
};
