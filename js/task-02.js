const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const liArrEl = [];

ingredients.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${element}`;
  liEl.classList.add("item");
  liArrEl.push(liEl);
});

ulEl.append(...liArrEl);
