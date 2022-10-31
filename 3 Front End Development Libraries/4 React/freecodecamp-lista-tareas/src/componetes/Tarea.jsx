import React from 'react';
import '../estilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea(  { id, texto, completada, completarTarea, eliminarTarea } ) {// completada: props que determina si la tarea ya fue completada
    return(
        // si el props completada es verdadero se le asigna la clase 'completada', de lo contrario no se agrega 
        <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
            <div className="texto-tarea" onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="contenedor-icono-tarea" onClick={() => eliminarTarea(id)}>
                {/* className pasa a ser un props de clase */}
                <AiOutlineCloseCircle className="icono-tarea" />
            </div>
        </div>
    );
}

export default Tarea;