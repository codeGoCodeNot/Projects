type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

type Entity = User | Organisation | Product;

type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

type EntityWithoutId = DistributiveOmit<Entity, "id">;

const obj: EntityWithoutId = {
  name: "Johnsen",
  price: 5,
  imageId: "img/src",
};

console.log(obj);
