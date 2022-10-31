import React, { useState } from 'react';
import '../estilos/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {
	const [input, setInput] = useState('');
	const manejarCambio = e => {
		// extraer el valor del campo de texto
		setInput(e.target.value);
	}
	const manejarEnvio = e => {
		e.preventDefault();
		const tareaNueva = { id: uuidv4(), texto: input, completada: false }
		
		props.onSubmit(tareaNueva);
	}


	return (
		<form className='formulario-tarea' onSubmit={manejarEnvio}>
			<input className="input-tarea"
				type='text'
				placeholder='Escribe una Tarea'
				name='texto'
				onChange={manejarCambio}
			/>
			<button className='boton-tarea'>Agregar Tarea</button>
		</form>
	);
}
export default Formulario;