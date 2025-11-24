import type { ProductProps } from "./data";

interface Product {
  details: ProductProps;
}

const Product = ({ details }: Product) => {
  return (
    <div className="product">
      <img src={details.thumbnail} alt={details.name} />
      <p className="product-name">{details.name}</p>
      <div className="product-price">${(details.price / 100).toFixed(2)}</div>
    </div>
  );
};

export default Product;
