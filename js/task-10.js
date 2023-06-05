function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector("#controls");
const createBtn = controlsEl.children[1];
const destroyBtn = controlsEl.children[2];
const inputEl = document.querySelector('[type="number"]');
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.valueAsNumber;
  const arrDivEl = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${i * 10 + 30}px`;
    divEl.style.height = `${i * 10 + 30}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrDivEl.push(divEl.outerHTML);
  }
  boxesEl.insertAdjacentHTML("beforeEnd", arrDivEl.join(""));
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
