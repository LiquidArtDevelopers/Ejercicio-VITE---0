# Codigo nuevo propuesto para el slider con flechas

Este archivo guarda el codigo nuevo que se habia aplicado al `artSlider01`.
Actualmente el proyecto queda sin estos cambios, pero aqui queda la referencia para recuperarlo o estudiarlo.

## HTML nuevo

Este bloque iba dentro del `<article class="artSlider01">`, despues de `artSlider01__mask` y antes de `artSlider01__track`.

```html
<!-- NUEVO HTML: botones/flechas del slider.
     Son button porque ejecutan una accion de JS, no navegan a otra pagina. -->
<button class="artSlider01__arrow artSlider01__arrow--prev" type="button" aria-label="Ver slide anterior">
  &lsaquo;
</button>
<button class="artSlider01__arrow artSlider01__arrow--next" type="button" aria-label="Ver slide siguiente">
  &rsaquo;
</button>
```

## CSS nuevo

Este bloque iba dentro de `.artSlider01`, en `_artSlider01.scss`.

```scss
// NUEVO CSS: estilos de los botones/flechas del slider.
// Estan en posicion absoluta para quedar encima del visor.
.artSlider01__arrow {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  z-index: 200;
  border: 0;
  border-radius: 50%;
  background-color: rgba(c.$color00, 0.9);
  color: c.$color04;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover,
  &:focus-visible {
    background-color: c.$color04;
    color: c.$color00;
  }

  &:active {
    transform: translateY(-50%) scale(0.92);
  }
}

// NUEVO CSS: posicion concreta de cada flecha.
.artSlider01__arrow--prev {
  left: 2.25rem;

  @media only screen and (min-width: c.$tablet) {
    left: 1rem;
  }
}

.artSlider01__arrow--next {
  right: 2.25rem;

  @media only screen and (min-width: c.$tablet) {
    right: 1rem;
  }
}
```

## JS nuevo

Este era el contenido propuesto para `_artSlider.js`, con carrusel infinito hacia delante y hacia atras.

```js
export default function artSlider() {
  const $carrousel = document.querySelectorAll(".artSlider01");

  $carrousel.forEach(($el) => {
    const $pista = $el.querySelector(".artSlider01__pista");
    const $dots = Array.from($el.querySelectorAll(".artSlider01__track__dot"));
    const $botonPrev = $el.querySelector(".artSlider01__arrow--prev");
    const $botonNext = $el.querySelector(".artSlider01__arrow--next");

    if (!$pista) return;

    const $slides = Array.from($pista.querySelectorAll(".artSlider01__slide"));

    // Comprobar que existan slides dentro del DOM.
    if ($slides.length === 0) return;

    // Estos tiempos estan separados para que sea facil cambiarlos en clase.
    const tiempoTransicion = 500;
    const tiempoEspera = 3000;

    let intervaloId;
    let enMovimiento = false;

    // NUEVO JS: clonamos slides en los dos extremos.
    // Orden final:
    // copia ultima | slide 1 | slide 2 | slide 3 | copia primera
    // Esto permite que avanzar y retroceder tengan el mismo efecto carrusel.
    const $copiaPrimera = $slides[0].cloneNode(true);
    const $copiaUltima = $slides[$slides.length - 1].cloneNode(true);

    $copiaPrimera.setAttribute("aria-hidden", "true");
    $copiaUltima.setAttribute("aria-hidden", "true");

    $pista.appendChild($copiaPrimera);
    $pista.prepend($copiaUltima);

    // contador guarda la posicion real dentro de la pista.
    // Empieza en 1 porque en la posicion 0 esta la copia de la ultima slide.
    let contador = 1;

    const obtenerIndiceDot = () => {
      if (contador === 0) return $slides.length - 1;
      if (contador === $slides.length + 1) return 0;

      return contador - 1;
    };

    const actualizarDots = () => {
      const dotActivo = obtenerIndiceDot();

      $dots.forEach(($dot, indice) => {
        $dot.classList.toggle("active", indice === dotActivo);
      });
    };

    const moverPista = (conTransicion = true) => {
      $pista.style.transition = conTransicion
        ? `transform ${tiempoTransicion}ms`
        : "none";
      $pista.style.transform = `translateX(-${contador * 100}%)`;
      actualizarDots();
    };

    const revisarSaltoInvisible = () => {
      setTimeout(() => {
        // Si estamos en la copia de la primera slide, saltamos a la primera real.
        if (contador === $slides.length + 1) {
          contador = 1;
          moverPista(false);
        }

        // Si estamos en la copia de la ultima slide, saltamos a la ultima real.
        if (contador === 0) {
          contador = $slides.length;
          moverPista(false);
        }

        enMovimiento = false;
      }, tiempoTransicion);
    };

    const moverSiguiente = () => {
      if (enMovimiento) return;

      enMovimiento = true;
      contador++;
      moverPista();
      revisarSaltoInvisible();
    };

    const moverAnterior = () => {
      if (enMovimiento) return;

      enMovimiento = true;
      contador--;
      moverPista();
      revisarSaltoInvisible();
    };

    const reiniciarAutoPlay = () => {
      clearInterval(intervaloId);
      intervaloId = setInterval(moverSiguiente, tiempoEspera);
    };

    // NUEVO JS: eventos de las flechas del slider.
    // Cada boton llama a una funcion y reinicia el autoplay para que no salte justo despues.
    $botonPrev?.addEventListener("click", () => {
      moverAnterior();
      reiniciarAutoPlay();
    });

    $botonNext?.addEventListener("click", () => {
      moverSiguiente();
      reiniciarAutoPlay();
    });

    // Colocamos el visor en la primera slide real, no en la copia inicial.
    moverPista(false);
    reiniciarAutoPlay();
  });
}
```
