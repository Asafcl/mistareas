import React, { useState } from "react";
import "../estilos/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

     props.onSubmit(tareaNueva);
  };

  return (
    <form className="tareaForm" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tareaInput"
        placeholder="Ingrese Alguna Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="btnTarea">agregar tarea</button>
    </form>
  );
}

export default TareaFormulario;
