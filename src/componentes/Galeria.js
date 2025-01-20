import React from "react";

function Galeria({ imagenes }) {
  return (
    <ul style={{ gap: "1opx" }}>
      {imagenes.map((item, index) => (
        <li
          style={{listStyle: 'none' }}
          key={index}
        >
          <img style={{ width: "100px",borderRadius: "10px" }} src={item} alt="Foto"/>
        </li>
      ))}
    </ul>
  );
}

export default Galeria;
