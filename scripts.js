const btnFormTogglers = document.querySelectorAll(".form-toggler");
const formsContainer = document.querySelector(".forms-container");

btnFormTogglers.forEach((btn) => {
  btn.addEventListener("click", () => {
    formsContainer.classList.toggle("toggle-form");
  });
});
