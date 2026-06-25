export default function navScrollTop() {
  // Escribir la lógica para poder cambiar el color de fondo del navbar cuando el scroll se ha desplazado 800px de la página
  const $navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 800) {
      $navbar.style.backgroundColor = "#008cd5";
      $navbar.classList.remove("bg-body-tertiary");
    } else {
      $navbar.classList.add("bg-body-tertiary");
    }
  });
}
