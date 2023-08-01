import React, {Component} from 'react'
import data from '../helpers/data.json'
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seasons: ["Primavera", "Verano", "Otonho", "Invierno"]
    }
  }
  render() {
    return(
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del anho</h3>
        <ol>
          {
            this.state.seasons.map((el, index) => <li key={index}>{el}</li>)
          }
        </ol>
        <h3>Frameworks frontend javaScript</h3>
        <ul>
          {
            // data.frameworks.map(el => <li key={el.id}><a href={el.web}>{el.name}</a></li>)
            data.frameworks.map(el => <ElementoLista key={el.id} el={el} />)
          }
        </ul>
      </div>
    )
  }
}

function ElementoLista(props) {
  return(
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  )
}
