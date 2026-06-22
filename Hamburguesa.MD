# Menu hamburguesa con JavaScript basico

Este ejemplo sirve para practicar el ejercicio del examen: crear un `header` con logo, boton hamburguesa, menu desplegable y JavaScript para abrir/cerrar el menu.

La idea principal es muy simple:

1. HTML crea el boton y el menu.
2. CSS oculta el menu al inicio.
3. JavaScript escucha el click.
4. `classList.toggle("open")` pone o quita una clase.
5. CSS muestra el menu cuando tiene la clase `.open`.

## 1. HTML

Este bloque iria dentro del `body`, normalmente arriba de la pagina.

```html
<header class="headerExam">
  <a href="#" class="headerExam__logo">Start Bootstrap</a>

  <button class="headerExam__burger" type="button" aria-label="Abrir menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav class="headerExam__menu">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Portfolio</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

## 2. CSS

Este CSS deja el header en horizontal, dibuja las tres lineas del boton y oculta el menu en movil hasta que JavaScript le ponga la clase `.open`.

```css
.headerExam {
  width: 100%;
  padding: 1rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.headerExam__logo {
  color: black;
  text-decoration: none;
  font-weight: 900;
}

.headerExam__burger {
  width: 44px;
  height: 38px;
  align-self: flex-end;
  padding: 0.45rem;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.headerExam__burger span {
  width: 100%;
  height: 3px;
  display: block;
  background-color: black;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.headerExam__menu {
  display: none;
  flex-direction: column;
  gap: 0.75rem;
}

.headerExam__menu a {
  color: black;
  text-decoration: none;
}

.headerExam__menu.open {
  display: flex;
}

.headerExam__burger.open span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.headerExam__burger.open span:nth-child(2) {
  opacity: 0;
}

.headerExam__burger.open span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

@media only screen and (min-width: 800px) {
  .headerExam {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .headerExam__burger {
    display: none;
  }

  .headerExam__menu {
    display: flex;
    flex-direction: row;
  }
}
```

## 3. JavaScript

Este es el codigo importante para el examen. Es nivel basico:

```js
const boton = document.querySelector(".headerExam__burger");
const menu = document.querySelector(".headerExam__menu");

boton.addEventListener("click", () => {
  boton.classList.toggle("open");
  menu.classList.toggle("open");

  const menuAbierto = menu.classList.contains("open");
  boton.setAttribute("aria-expanded", menuAbierto);
});
```

## 4. Explicacion linea por linea

```js
const boton = document.querySelector(".headerExam__burger");
```

Guarda en una constante el boton hamburguesa.

```js
const menu = document.querySelector(".headerExam__menu");
```

Guarda en una constante el menu que queremos abrir y cerrar.

```js
boton.addEventListener("click", () => {
```

Escucha el click del usuario sobre el boton.

```js
boton.classList.toggle("open");
menu.classList.toggle("open");
```

Si la clase `open` no existe, la anade. Si ya existe, la quita.

```js
const menuAbierto = menu.classList.contains("open");
boton.setAttribute("aria-expanded", menuAbierto);
```

Esto actualiza el atributo `aria-expanded`. No es obligatorio para entender el ejercicio, pero mejora la accesibilidad.

## 5. Version minima para memorizar

Si en el examen solo piden abrir y cerrar el menu, esta version es suficiente:

```js
const boton = document.querySelector(".headerExam__burger");
const menu = document.querySelector(".headerExam__menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("open");
});
```

## 6. Como aplicarlo en este proyecto Vite

Opcion sencilla para clase:

1. Pegar el HTML en `index.html`.
2. Pegar el CSS en un archivo SCSS nuevo, por ejemplo `_artHeaderHamburguesa.scss`.
3. Importar ese SCSS desde `main.scss`.
4. Pegar el JS en un archivo nuevo, por ejemplo `_artHeaderHamburguesa.js`.
5. Importar y ejecutar la funcion desde `main.js`.

La base que deben entender los alumnos es esta:

```js
elemento.classList.toggle("open");
```

Esa linea es la que abre y cierra el menu.
