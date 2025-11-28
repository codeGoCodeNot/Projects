import type { ProductProps } from "./types";

interface Product {
  details: ProductProps;
}

const Product = ({ details }: Product) => {
  return (
    <div className="product">
      <img
        className="product-image"
        width="272"
        height="300"
        src={details.thumbnail}
        alt={details.name}
      />
      <p className="product-name">{details.name}</p>
      <div className="product-price">
        ${(details.final_price / 100).toFixed(2)}
      </div>
    </div>
  );
};

export default Product;
