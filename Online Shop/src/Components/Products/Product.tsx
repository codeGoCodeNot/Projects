import type { ProductProps } from "../types";
import Price from "../Price";

interface Product {
  details: ProductProps;
}

const Product = ({ details }: Product) => {
  console.log(details);

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
        {
          <Price
            finalPrice={details.final_price}
            originalPrice={details.original_price}
          />
        }
      </div>
    </div>
  );
};

export default Product;
