// Importamos el archivo principal de estilos.
import "../scss/main.scss";

// Importamos modulos que ejecutan codigo o exportan funciones.
import "./assets/_artJs.js";
import artSlider from "./assets/_artSlider.js";
import { artAcordeon01 } from "./assets/_artAcordeon01.js";
import topBottom from "./assets/_topBottom.js";
import darkMode from "./assets/_darkmode.js";
import observer from "./assets/_observer.js";
import navScrollTop from "./assets/_navScrollTop.js";
import modal from "./assets/_modal.js";
import validationForm from "./assets/_validationForm.js";

// Importamos las plantillas HTML que se mostraran dentro de las modales.
import Dialog from "./assets/templates/Dialog.js";
import Dialog2 from "./assets/templates/Dialog2.js";
import Dialog3 from "./assets/templates/Dialog3.js";

// Esperamos a que todo el HTML este cargado antes de buscar elementos del DOM.
document.addEventListener("DOMContentLoaded", () => {
  // Activamos los ejercicios interactivos de la pagina.
  artAcordeon01();
  artSlider();

  // Creamos el boton para volver arriba y lo agregamos dentro de main.
  const $main = document.querySelector("main");
  $main.appendChild(topBottom());

  // Activamos funcionalidades generales de la interfaz.
  darkMode();
  observer();
  navScrollTop();

  // Relacionamos cada boton con la plantilla que debe abrir en su modal.
  const modals = [
    { button: "#openModal1", template: Dialog },
    { button: "#openModal2", template: Dialog2 },
    { button: "#openModal3", template: Dialog3 },
  ];

  // Recorremos la lista de modales y asignamos el evento click a cada boton.
  modals.forEach((item) => {
    const $btnOpenModal = document.querySelector(item.button);

    $btnOpenModal.addEventListener("click", () => {
      document.body.appendChild(modal(item.template()));
    });
  });

  // Activamos la validacion del formulario.
  validationForm();
});
