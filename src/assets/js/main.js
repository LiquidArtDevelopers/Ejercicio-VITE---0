import "../scss/main.scss"; //aquí importo el scss
import "./assets/_artJs.js";
import artSlider from "./assets/_artSlider.js";
//aquí importo todo el código en bruto del otro fichero

// Aquí importo la función que en el otro archivo exporto a través de un alias
// Para poder ejecutar el código aquí importado, necesitaré ejecutar o kllamar a su función. (que es la función que en el otro fichero exporto)
import { artAcordeon01 } from "./assets/_artAcordeon01.js";

//así llamo a la función que me viene del import, y lo hacemos cuando el dom se ha cargado. esto es un listener que espera a que el dom (html) se cargue.

document.addEventListener("DOMContentLoaded", () => {
  artAcordeon01();
  artSlider();
});
