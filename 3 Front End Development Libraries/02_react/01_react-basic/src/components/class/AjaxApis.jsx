import React, { Component } from 'react'
function Pokemon(props) {
  return(
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}
export default class AjaxApis extends Component {
  state = {
    pokemons: []
  }
  componentDidMount() {
    // Hace una peticion al pokeAPI
    let url = "https://pokeapi.co/api/v2/pokemon/"
    fetch(url)
    .then(res => res.json())
    .then(json => {
      // console.log(json)
      json.results.forEach( // por cada pokemon en el arreglo 'results', vuelve hacer una peticion utilizando la propriedad 'url' de cada elemento
        el => {
          fetch(el.url)
          .then( res => res.json())
          .then(json => {
              // console.log(json)
            let pokemon = { // Crea un nuevo objeto con con los datos del pokemon
              id: json.id,
              name: json.name,
              avatar: json.sprites.front_default
            }
            
            // Guarda todos los pokemon en un arreglo de nombre 'pokemons'
            let pokemons = [...this.state.pokemons, pokemon]
            this.setState({ // Actualiza el state con el nuevo agrreglo de pokemons
              pokemons // pokemons: pokemons
            })

          })
        }
      )
    })
    .catch(err => console.log(err))
  }
  render() {
    return(
      <>
      <h2>Peticiones Asincronas en Class Components</h2>
      {this.state.pokemons.length === 0
      ? (<h3>Cargando...</h3>)
      : (this.state.pokemons.map((el) => {
        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        }))
      }
      </>
    )
  }
}
