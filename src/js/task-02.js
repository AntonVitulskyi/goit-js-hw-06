const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients")

const commitEl = [];

for (const ingredient of ingredients){
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  commitEl.push(newElement)
}

ingredientsListEl.append(...commitEl);

console.dir(commitEl)
