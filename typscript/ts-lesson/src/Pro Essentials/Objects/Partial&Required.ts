interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Partial<T>

const updateProduct = (
  id: number,
  productInfo: Partial<Omit<Product, "id">>
) => {
  return `${id} ${productInfo.name}`;
};

console.log(updateProduct(1, { name: "Johnsen" }));

// Required<T>

type Coordinates = {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
};

type RequiredAll = Required<Coordinates>;

const requiredProducts = (productInfo: RequiredAll) =>
  `${productInfo.id} ${productInfo.description} ${productInfo.name} ${productInfo.price}`;

console.log(
  requiredProducts({
    id: 5,
    name: "Car",
    description: "Super Car",
    price: 1_000_000,
  })
);
