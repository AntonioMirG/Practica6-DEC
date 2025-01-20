import React from "react";

function Boton({ texto, color, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, padding: "10px"}}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
