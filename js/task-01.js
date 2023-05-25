const categoriesEl = document.querySelector("#categories");

const quantityCategories = categoriesEl.children;
console.log("Number of categories: ", quantityCategories.length);

const liItemEl = categoriesEl.querySelectorAll(".item");
liItemEl.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
