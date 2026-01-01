document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuToggle || !nav) {
    console.error("No se encontró .menu-toggle o .nav");
    return;
  }

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
