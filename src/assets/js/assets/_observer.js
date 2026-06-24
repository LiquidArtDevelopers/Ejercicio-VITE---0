export default function observer() {
  function loadElements(entradas) {
    // Recorremos las entradas observada por el observer
    entradas.forEach((entrada) => {
      //Comprobar si la section ha sido intersectada
      if (entrada.isIntersecting) {
        //Seleccionamos todos los elementos con la clase fadeOut
        const fadeOutElements = entrada.target.querySelectorAll(".fadeOut");
        // Los recorremos
        fadeOutElements.forEach((element) => {
          // Quitamos la clase fadeOut y agregamos la fadeIN
          element.classList.remove("fadeOut");
          element.classList.add("fadeIn");
        });
      }
    });
  }
  //Creamos la instancia del observador y su configuración
  const observador = new IntersectionObserver(loadElements, {
    threshold: 0.1,
  });
  // Selecionamos las sections para ser observadas
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    // Le decimos al observador que observe cada section
    observador.observe(section);
  });
}
