import React from "react";
import Boton from "./componentes/Boton";
import Cronometro from "./componentes/Cronometro";
import Galeria from "./componentes/Galeria";
import Formulario from "./componentes/Formulario";
import "./App.css";

function mostrar(mensaje) {
  alert(mensaje);
}

const imagenes = [
  "https://images.pexels.com/photos/30184089/pexels-photo-30184089/free-photo-of-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1732278881253-ed69fb34e01e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function App() {
  return (
    <div>
      <section>
        <h2>Botones de colores</h2>
        <Boton
          texto={"Boton verde"}
          color={"green"}
          onClick={() => mostrar("Esto es un boton verde")}
        />
        <Boton
          texto={"Boton rojo"}
          color={"red"}
          onClick={() => mostrar("Esto es un boton rojo")}
        />
        <Boton
          texto={"Boton azul"}
          color={"blue"}
          onClick={() => mostrar("Esto es un boton azul")}
        />
      </section>

      <hr />

      <section>
        <h2>Componente formulario</h2>
        <Formulario />
      </section>

      <hr />

      <section>
        <h2>Componente Lista</h2>
        <Galeria imagenes={imagenes} />
      </section>

      <hr />

      <section>
        <h2>Componente Contador</h2>
        <Cronometro />
      </section>
    </div>
  );
}

export default App;
