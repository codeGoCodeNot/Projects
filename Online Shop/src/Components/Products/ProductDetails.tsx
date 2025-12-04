import { Link, useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "../../Fetcher/fetcher";
import Price from "../Price";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import type { ProductProps } from "../types";

const ProductDetails = () => {
  const { id } = useParams();

  const { data } = useSuspenseQuery<ProductProps[]>({
    queryKey: ["products/details", id],
    queryFn: () => get(`products?id=eq.${id}`),
  });

  const context = useContext(CartContext);
  if (!context) return null;
  const { handleAddProduct } = context;

  const details = data[0];

  return (
    <>
      <Link to="/products" className="back">
        &lsaquo; Back to products
      </Link>
      <title>{`${details.name} | Blackmarket`}</title>
      <div className="details">
        <div>
          <img
            src={details.thumbnail}
            alt={details.name}
            width="612"
            height="408"
            className="details-image"
          />

          <h2>Product details</h2>
          <table className="nutrition">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Protein</td>
                <td>{details.nutrition.protein}</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>{details.nutrition.carbs}</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{details.nutrition.fat}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="details-name">{details.name}</h1>
          <p className="details-price">
            <Price
              finalPrice={details.final_price}
              originalPrice={details.original_price}
            />
          </p>
          <p
            className="text-dimmed pt-5"
            dangerouslySetInnerHTML={{ __html: details.description }}
          ></p>
          <div className="details-a2c">
            <button
              onClick={() => handleAddProduct(details)}
              className="btn btn-block"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
