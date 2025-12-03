import type { ProductProps } from "../types";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = ({ products }: { products: ProductProps[] }) => {
  const { id } = useParams();

  const product = products.find((product) => String(product.id) === id);

  return product ? (
    <Product details={product} />
  ) : (
    <div>Product not found.</div>
  );
};

export default ProductDetails;
