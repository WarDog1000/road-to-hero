import React, { Component } from 'react'

class Reloj extends Component {
  constructor(props) {
    super(props)
  }
  componentWillUnmount() {
    // console.log(3, "El componente ah sido eliminado del DOM")
  }
  render() {
    return(
      <h3>{this.props.hora}</h3>
    )
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props)
    // console.log(0, "El componente se inicializa, aun NO esta en el DOM")

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    }

    this.temporizador = null
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el DOM")
  }

  componentDidUpdate(prevProps, prevStates) {
    // console.log(2, "El estado de los props han cambiado")
    console.log(prevProps, prevStates)
  }


  // Metodos
  iniciar = () => {
    this.tictac()
    this.setState({visible: true})
  }

  detener = () => {
    clearInterval(this.temporizador)
    this.setState({visible: false})
  }

  tictac = () => {
    this.temporizador = setInterval(() => { this.setState({hora: new Date().toLocaleTimeString()})}, 1000)
  }



  render() {
    // console.log(4, "El componente se dibuja o redibuja por alguncambio en el DOM")
    return (
      <>
        <h2>Ciclo de vida de los componentes de Clase</h2>
        { this.state.visible && <Reloj hora={this.state.hora}/> }
        
        <button onClick={this.iniciar}>Iniciar</button><button onClick={this.detener}>Detener</button>
      </>
    )
  }
}
