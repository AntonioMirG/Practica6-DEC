import React from "react";

function Formulario() {
  return (
    <form>
      <label>Nombre</label>
      <input id="nombre" placeholder="Introduce un nombre..."></input>

      <label>Mensaje</label>
      <textarea id="mensaje" placeholder="Introduce un mensaje..."></textarea>

      <button
        type="submit"
        onClick={function mostrar(e) {
          const nombre = document.getElementById("nombre").value;
          const mensaje = document.getElementById("mensaje").value;
          e.preventDefault();
          alert(`Hola, ${nombre}, ${mensaje}`);
        }}
      >
        Enviar
      </button>
    </form>
  );
}
export default Formulario;
