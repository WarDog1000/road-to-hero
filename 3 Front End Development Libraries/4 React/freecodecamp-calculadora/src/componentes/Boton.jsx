import React from 'react';
import '../estilos/Boton.css';

function Boton(props) { // asignar clase segun contenido del componente
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    // if(esOperador(props.children)) {
    //     return (<div className='boton-contenedor operador' onClick={() => props.manejarClick(props.children)}>{props.children}</div>);
    // }else {
    //     return (<div className='boton-contenedor' onClick={() => props.manejarClick(props.children)}>{props.children}</div>);
    // }

    return (
        <button className={`boton-contenedor 
        ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    );
}
export default Boton;