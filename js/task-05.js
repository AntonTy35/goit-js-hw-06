const inputNameEl = document.querySelector("#name-input");

const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (e) => {
  outputNameEl.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    outputNameEl.textContent = "Anonymous";
  }
});
