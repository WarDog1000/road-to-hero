import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
// import { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  manejarClick() {
    this.setState(({numClicks}) => ({numClicks: numClicks + 1}));
  }
  reiniciarContador() {
    this.setState(() => ({numClicks: 0}));
  }
  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img src={freeCodeCampLogo} alt='Logo de freeCodeCamp' className="freecodecamp-logo" />
        </div>
        <div className="contenedor-contador">
          <Contador numClicks= {this.state.numClicks} />
          <Boton texto='Click' esBotonDeClick={true} manejarClick={this.manejarClick} />
          <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClicks, setNumClicks] = useState(0);

//   const manejarClick = () => {
//     setNumClicks(numClicks + 1);
//   };
//   const reiniciarContador = () => {
//     setNumClicks(0);
//   };

// }

export default App;