import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt='Logo de freeCodeCamp' className="freecodecamp-logo" />
      </div>
      <div className="contenedor-contador">
        <Contador numClicks= {numClicks} />
        <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;