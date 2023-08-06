import React, { Component } from 'react'
export default class Padre extends Component {
  state = {
    contador : 0
  }

  incrementar = (e) => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <>
        <h2>Comunicacion entre componentes</h2>
        <hr />
        <p> de padre a hijo, atraves de las 'props'</p>
        <Hijo mensaje="Mensaje para el hijo 1" />
        <hr />
        <p> de hijo a padre, atraves de las 'props</p> 
        <Hijo incrementar={this.incrementar} mensaje="Mensaje para el hijo 2" />
        <p>El hijo ejecuta una funcion que modifica el staten del padre en: <b>{this.state.contador}</b></p>
      </>
    )
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementar}>+</button>
    </>
  )
}
