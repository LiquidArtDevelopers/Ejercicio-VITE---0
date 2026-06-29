export default function validationForm() {
  // Objeto con las reglas de validacion para cada input.
  const errors = {
    name: {
      pattern: "^(?=.{3,}$)[A-Za-z]+(\\s[A-Za-z]+)*$",
      message: "El nombre debe contener letras, minimo 3 caracteres.",
    },
    surname: {
      pattern: "^(?=.{3,}$)[A-Za-z]+(\\s[A-Za-z]+)*$",
      message: "El apellido debe contener letras, minimo 3 caracteres.",
    },
  };

  document.addEventListener("submit", (event) => {
    // Evitamos que el formulario recargue la pagina.
    event.preventDefault();

    const $form = event.target;
    const $formFields = $form.querySelectorAll(".form__field");

    // Recorremos cada campo del formulario.
    $formFields.forEach((field) => {
      const input = field.querySelector("input");
      const inputError = errors[input.name];
      const pattern = new RegExp(inputError.pattern);

      // Buscamos si este campo ya tiene un mensaje de error creado.
      // Asi evitamos insertar varios mensajes iguales en cada submit.
      const $error = field.querySelector(".form__input--error");

      // Guardamos el valor tal como lo escribe el usuario.
      // No usamos trim() porque queremos detectar espacios al inicio o al final.
      const inputValue = input.value;

      // Guardamos el resultado de la validacion en una variable.
      // Esta expresion regular permite espacios solo entre palabras.
      const isInputValid = pattern.test(inputValue);

      // Si el campo no es valido y todavia no tiene error, creamos el mensaje.
      if (!isInputValid && !$error) {
        const $span = document.createElement("span");

        $span.className = "form__input--error";
        $span.innerText = inputError.message;
        field.insertAdjacentElement("beforeend", $span);
      } else if (isInputValid && $error) {
        // Si el campo ya es valido, eliminamos el mensaje de error.
        $error.remove();
      }
    });
  });
}
