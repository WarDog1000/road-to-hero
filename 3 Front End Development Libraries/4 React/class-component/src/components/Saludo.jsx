class Saludo extends React.Component {
  constructor(props) { // funcion principal de una clase componente
    super(props); // hereda todos laspropriedades de su componenet padre 'React.Component'
    this.state = {
      completada: true, // state es un componente standar de los componenentes
      color: azul,
      prioridad: 1,
      nombre: 'Jhony'
    };
    
    this.setState({color: red}); // actualiza un state
  }
  reder() {
    return <h1>Hola, {this.state.nombre}</h1>;
  }
}
export default Saludo;
