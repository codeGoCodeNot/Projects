type Recipe = {
  title: string;
  ingredients: Ingredient[];
  instructions: string;
};

type Ingredient = {
  name: string;
  quantity: string;
};

const processRecipe = (recipe: Recipe) =>
  recipe.ingredients.forEach((i) => console.log(i));

const title = (recipe: Recipe) => console.log(recipe.title);

const result = {
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
    { name: "Milk", quantity: "1 cup" },
  ],
  instructions: "...",
};

title(result);
processRecipe(result);
