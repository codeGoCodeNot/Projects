// passing array as props have 2 ways either string[] or Array<string>
// passing arrays of objects have many ways but this is my preferred way
type ShoppingCart = {
  userId: string;
  items: string[];
  ingredients: Ingredient[];
};

type Ingredient = {
  name: string;
  quantity: string;
};

const processCart = (cart: ShoppingCart) => {
  console.log(cart.userId, cart.items);
  console.log(cart.items);
  console.log(cart.ingredients);
};

processCart({
  userId: "123",
  items: ["item1", "item2", "item3"],
  ingredients: [{ name: "Sugar", quantity: "1 cup" }],
});
