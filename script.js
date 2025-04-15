const potionContainers = document.querySelectorAll(".potion-container");

// potionContainers.forEach((container) => {
//   container.addEventListener("click", function () {
//     container.style.backgroundColor = "orange";
//   });
// });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from submitting and reloading the page
    const formData = new FormData(this);
  });

document.querySelectorAll(".flip-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".card").classList.toggle("flipped");
  });
});
