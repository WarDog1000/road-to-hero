import React from 'react'
import PropTypes from 'prop-types'
export default function Properties(props) {
    return <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? "verdadero" : "falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.nombre +" " + props.object.edad}</li>
        <li>{props.elementoReact}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div> 
}

Properties.defaultProps = {
  porDefecto: "Prop por defecto"
}

// lib prop-types
Properties.propTypes = {
  // Define tipado fuerte a las variables
  numero: PropTypes.number.isRequired // establecio numero como un typo 'number' y es requerido
}