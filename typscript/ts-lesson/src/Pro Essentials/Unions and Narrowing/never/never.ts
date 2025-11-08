type ShoppingCart = {
  items: string[];
};

const shoppingCart: ShoppingCart = {
  items: [],
};

shoppingCart.items.push("Banana", "Pear");
console.log(shoppingCart.items.length);
