export default function darkMode() {
  const $btnDarkMode = document.querySelector(".header--darkModeButton");

  const $icon = $btnDarkMode.querySelector(".fa-solid");
  const theme = localStorage.getItem("theme") ?? "light";

  if (theme === "dark") {
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    document.body.classList.add("dark");
  }

  // Registrar el evento click en el botón
  $btnDarkMode.addEventListener("click", (e) => {
    const isDark = localStorage.getItem("theme") === "dark";
    // Cambiamos el icono del elemento fa-solid a sun o moon según corresponda
    $icon.classList.toggle("fa-sun");
    $icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}
