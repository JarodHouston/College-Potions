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

const instructionsHTML = `
<ol>
  <li>Start by mixing the first two ingredients
    <ul>
      <li>Make sure you mix these thoroughly</li>
      <li>Keep mixing until it is one uniform entity (cannot distinguish the individual ingredients)</li>
    </ul>
  </li>
  <li>Add the remaining ingredients one at a time
    <ul>
      <li>Again, for each, mix until the new ingredient you added is fully incorporated</li>
    </ul>
  </li>
  <li>Once all ingredients have been added, let the potion sit for 5-10 minutes, and enjoy!</li>
</ol>`;

const instructionContainers = document.querySelectorAll(
  ".instructions-container"
);

instructionContainers.forEach((container) => {
  container.innerHTML = instructionsHTML;
});

document.querySelectorAll(".trackable-link").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("clicked");
  });
});

const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

const savedMode = localStorage.getItem("theme");
if (savedMode) {
  body.classList.add(savedMode);
}

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
});
