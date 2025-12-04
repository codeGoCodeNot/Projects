import Product from "./Product";
import type { ProductProps } from "../types";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductsGrid = ({ products }: { products: ProductProps[] }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: { target: { value: string } }) =>
    setQuery(e.target.value.trim().toLowerCase());

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="products-title">
        <h1>Products</h1>
        <title>Products | Blackmarket</title>
        <input
          type="search"
          className="search"
          placeholder="Search products"
          onChange={handleSearchChange}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <div className="products-not-found">
          <div>
            <h2>No products found!</h2>
            <p>
              Your search &quot;<strong>{query}</strong>&quot; was not found in
              our store.
            </p>
            <button
              className="btn btn-dimmed"
              type="button"
              onClick={() => setQuery("")}
            >
              Reset search
            </button>
          </div>
        </div>
      ) : null}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Product key={product.id} details={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
