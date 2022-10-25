import React from 'react';
import '../estilos/Testimonio.css';
export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Soto de Emma" className="imagen-testimonio" />
            <div className="contenedor-texto-testimonio">
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    )
}

export default Testimonio;