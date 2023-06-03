const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Bсі поля повинні бути заповнені!");
  }
  console.log(data);
  formEl.reset();
}
