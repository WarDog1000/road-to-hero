import React, { useState, useEffect } from 'react';
export default function AjaxHooks() {
  // STATE
  const [pokemons, setPokemons] = useState([])
  // EFFECT
  useEffect(() => {
    // Hace una peticion al pokeAPI
    const request = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon/"
      let req = await fetch(url)
      let res = await req.json()
      res.results.forEach(
        async (el) => {
          let req = await fetch(el.url)
          let res= await req.json()
          let pokemon = { // Crea un nuevo objeto con con los datos del pokemon
              id: res.id,
              name: res.name,
              avatar: res.sprites.front_default,
            }
          setPokemons((pokemons) => [...pokemons, pokemon])
          console.log(pokemons)
        }    
      )   
    }

    request()
  }, []) // el parametro 'vacio' hace que la funcio se ejecute una sola vez
  function Pokemon({avatar, name}) {
    return(
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    )
  }
  return(
    <>
      <hr />
      <h3>AJax Async con Hooks</h3>
      {pokemons.length === 0
        ? (<p>Cargando...</p>) // si el tamnho del array es '0'
        : (pokemons.map( el => { // sino, recore el array y renderiza un componente "<Pokemon />'"
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          }))
      }
    </>
  )
}