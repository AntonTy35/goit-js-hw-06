const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.getElementById("text");

fontSizeEl.addEventListener("input", () => {
  textEl.style.fontSize = fontSizeEl.value + "px";
});
