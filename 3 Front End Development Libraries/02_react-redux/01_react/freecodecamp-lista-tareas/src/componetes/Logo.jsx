import React from "react";
import '../estilos/Logo.css'
// import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

function Logo(props) { // asignar clase segun contenido del componente
    return (
        <div className='logo-contenedor'>
            <img className='logo' src={props.logo} alt='Logo' />
        </div>
    );
}
export default Logo;