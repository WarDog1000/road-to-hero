import './App.css';
import Logo from './componetes/Logo.jsx'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
// import Tarea from './componetes/Tarea.jsx'
// import Formulario from './componetes/Formulario.jsx';
import ListaDeTareas from './componetes/ListaDeTareas';

function App() {
  return (
    <div className="App">
     <Logo logo={freeCodeCampLogo}/>
     <div className="lista-tareas-principal">
      <h1>Mis Tareas</h1>
        <ListaDeTareas />
     </div>
    </div>
  );
}

export default App;
