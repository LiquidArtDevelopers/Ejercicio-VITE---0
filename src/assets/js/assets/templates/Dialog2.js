export default function Dialog2() {
  return `
    <div class="modal-template modal-template--dos">
      <span class="modal-template__tag">Modal 2</span>
      <h2>Oferta especial</h2>
      <p>
        Segunda plantilla para mostrar informacion destacada con otro estilo.
      </p>
      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-success" type="button" data-modal-close>Guardar</button>
        <button class="btn btn-outline-success" type="button" data-modal-close>Cancelar</button>
      </div>
    </div>
  `;
}
