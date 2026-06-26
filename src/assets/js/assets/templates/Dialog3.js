export default function Dialog3() {
  return `
    <div class="modal-template modal-template--tres">
      <span class="modal-template__tag">Modal 3</span>
      <h2>Confirmar accion</h2>
      <p>
        Tercera plantilla pensada para confirmar una accion importante.
      </p>
      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-dark" type="button" data-modal-close>Confirmar</button>
        <button class="btn btn-outline-dark" type="button" data-modal-close>Volver</button>
      </div>
    </div>
  `;
}
