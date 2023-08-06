import React, {Component} from 'react'
export class EventosES6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }

    // enlasar el metodo al "this" de la "clase"
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar(e) {
    this.setState(
      {
        contador: this.state.contador + 1
      }
    )
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return(
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0
  }

  // la arrow function hereda el this de la clase
  sumar = (e) => {
    this.setState(
      {
        contador: this.state.contador + 1
      }
      )
    }
    
    // la arrow function hereda el this de la clase
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return(
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// const Boton = (props) => <button onClick={props.myOnClick}>Componente Button</button>
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Componente Button</button>
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e) // SyntheticBaseEvent
    console.log(e.target)
    console.log(e.nativeEvent) // PointerEvent
    console.log(e.nativeEvent.target)
    console.log(mensaje)
  }
  render() {
    return (
      <div>
        <h3>Mas sobre eventos</h3>
        <button onClick={(e)=> this.handleClick(e, "Pasando parametro desde un evento")}>Saludar</button>
        {/* Evento personalizado */}
        <Boton myOnClick={ e => this.handleClick(e, "Evento personalizado")} />
      </div>
    )
  }
}