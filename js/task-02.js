const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMarcup = document.querySelector('#ingredients')

const indigredientsElenents = ingredients.map(item => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList = 'item';
  ingredientItem.textContent = item;
  return ingredientItem;
});

ingredientsMarcup.append(...indigredientsElenents);
