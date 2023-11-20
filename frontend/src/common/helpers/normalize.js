import doughEnums from "../data/doughSizes";
import sizesEnums from "../data/sizes";
import saucesEnums from "../data/sauces";
import ingredientsEnums from "../data/ingredients";

export const normalizeDough = (dough) => ({
  ...dough,
  size: doughEnums[dough.id],
});

export const normalizeSize = (size) => ({
  ...size,
  type: sizesEnums[size.id],
});

export const normalizeSauce = (sauce) => ({
  ...sauce,
  type: saucesEnums[sauce.id],
});

export const normalizeIngredient = (ingredient) => ({
  ...ingredient,
  type: ingredientsEnums[ingredient.id],
});
