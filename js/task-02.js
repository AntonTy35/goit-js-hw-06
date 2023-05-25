const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${element}`;
  liEl.classList.add("item");
  ulEl.appendChild(liEl);
});
