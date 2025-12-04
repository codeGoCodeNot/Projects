import Product from "./Product";
import type { ProductProps } from "../types";
import { Link } from "react-router-dom";

const ProductsGrid = ({ products }: { products: ProductProps[] }) => {
  return (
    <>
      <div className="products-title">
        <h1>Products</h1>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Product key={product.id} details={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
