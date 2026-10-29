// Mobile menu: show/hide the links when the ☰ button is pressed
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navigation");

function setMenuOpen(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navLinks.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after picking a link, or when pressing Escape
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});
