// Contact button: show/hide the two email options when pressed
const contactMenu = document.querySelector(".contact-menu");
const contactToggle = document.querySelector(".contact-toggle");
const contactOptions = document.getElementById("contact-options");

function setContactOpen(open) {
  contactToggle.setAttribute("aria-expanded", String(open));
  contactOptions.hidden = !open;
}

contactToggle.addEventListener("click", () => {
  setContactOpen(contactToggle.getAttribute("aria-expanded") !== "true");
});

// Close when clicking anywhere outside the menu, or when pressing Escape
document.addEventListener("click", (event) => {
  if (!contactMenu.contains(event.target)) setContactOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setContactOpen(false);
});
