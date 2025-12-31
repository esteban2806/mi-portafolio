document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) {
    console.error("No se encontró menuToggle o navLinks");
    return;
  }

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
