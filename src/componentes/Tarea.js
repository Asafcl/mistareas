import React from "react";
import "../estilos/tarea.css";
import { AiFillDelete } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tareaCont completada" : "tareaCont"}>
      <div className="tareaTexto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tareaIconosCont" onClick={()=> eliminarTarea(id)}>
        <AiFillDelete className="tareaIcono" />
      </div>
    </div>
  );
}
export default Tarea;
