type ShoppingCart = {
  userId?: number;
  item: string[];
};

const processCart = (cart: ShoppingCart) => cart.item;

console.log(processCart({ item: ["item1", "item2", "item3"] }));
