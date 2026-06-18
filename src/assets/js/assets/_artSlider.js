export default function artSlider() {
  const $carrousel = document.querySelectorAll(".artSlider01");

  $carrousel.forEach(($el) => {
    const $pista = $el.querySelector(".artSlider01__pista");

    const $sliders = $pista.querySelectorAll(".artSlider01__slide");

    // Comprobar que nuestra pista y los slider existan dentro del DOM
    if (!$pista || $sliders.length === 0) return;

    // contador guarda en que slide estamos.
    // Empieza en 0 porque la primera slide es la posicion inicial.
    let contador = 0;

    // Estos tiempos estan separados para que sea facil cambiarlos en clase.
    const tiempoTransicion = 500;
    const tiempoEspera = 3000;

    $sliders.forEach(($slide) => {
      console.log($slide);
    });

    setInterval(() => {
      console.log(`Contador: ${contador}`);
      console.log(`Tiempo: ${(tiempoEspera * contador) / 1000}s`);
      // contador = contador + 1;
      contador++;
    }, tiempoEspera);
  });
}
