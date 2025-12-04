const Price = ({
  finalPrice,
  originalPrice,
}: {
  finalPrice: number;
  originalPrice: number;
}) => {
  return (
    <>
      ${(finalPrice / 100).toFixed(2)}
      {finalPrice !== originalPrice ? (
        <span className="price-old">${(originalPrice / 100).toFixed(2)}</span>
      ) : null}
    </>
  );
};

export default Price;
