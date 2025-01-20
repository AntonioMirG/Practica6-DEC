import React, { useState } from "react";

const Cronometro = () => {
  const [contador, setContador] = useState(0);

  setTimeout(() => {
    setContador((contador) => contador + 0.5);
  }, 1000);

  const Reiniciar = () => {
    setContador(0);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => Reiniciar()}>Reiniciar</button>
    </div>
  );
};

export default Cronometro;
