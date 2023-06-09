function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onClick);

function onClick() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${bodyEl.style.backgroundColor}`;
}
