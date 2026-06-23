export default function darkMode() {
  const $btnDarkMode = document.querySelector(
    ".nav__container--darkModeButton",
  );

  // Registrar el evento click en el botón

  $btnDarkMode.addEventListener("click", (e) => {
    const $icon = $btnDarkMode.querySelector(".fa-solid");
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
  });

  // Cambiar el icono del elemento fa-solid a sun o moon según corresponda
}
