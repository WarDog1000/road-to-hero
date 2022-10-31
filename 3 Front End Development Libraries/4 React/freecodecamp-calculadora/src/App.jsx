import './App.css';
import Logo from './componentes/Logo.jsx'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

	const [input, setInput] = useState('');

	const agregarInput = valor => {
		setInput(input + valor)
	};

	const calcularResultado = () => {
		try{
			if (input) {
			setInput(evaluate(input)); // la fucio evaluate perteece al paquete math.js
		} else {
			alert('Por favor igresa valores para realizar los calculos')
		}
		}catch(math){
			alert('Operacion o valida')
			setInput('')
		}
		
	};

	return (
		<div className='App'>
			<Logo logo={freeCodeCampLogo}/>
			<div className="contenedor-calculadora">
				<Pantalla input={input} />
				<div className="fila">
					<Boton manejarClick={agregarInput}>1</Boton>
					<Boton manejarClick={agregarInput}>2</Boton>
					<Boton manejarClick={agregarInput}>3</Boton>
					<Boton manejarClick={agregarInput}>+</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={agregarInput}>4</Boton>
					<Boton manejarClick={agregarInput}>5</Boton>
					<Boton manejarClick={agregarInput}>6</Boton>
					<Boton manejarClick={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={agregarInput}>7</Boton>
					<Boton manejarClick={agregarInput}>8</Boton>
					<Boton manejarClick={agregarInput}>9</Boton>
					<Boton manejarClick={agregarInput}>*</Boton>
				</div>
				<div className="fila">
					<Boton manejarClick={calcularResultado}>=</Boton>
					<Boton manejarClick={agregarInput}>0</Boton>
					<Boton manejarClick={agregarInput}>.</Boton>
					<Boton manejarClick={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
