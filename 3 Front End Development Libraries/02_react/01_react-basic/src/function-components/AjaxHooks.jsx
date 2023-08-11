import React, { useState, useEffect } from 'react'

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([])

  const fetchData = async () => { // Hace la peticion al pokeAPI
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/"
      const res = await fetch(url)
      const json = await res.json()

      const pokemon = json.results.map(async (el) => { // Crea un objeto con los datos de cada pokemon
        const res = await fetch(el.url)
        const json = await res.json()

        return {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        }
      })

      const pokemonData = await Promise.all(pokemon)

      setPokemons(pokemonData)
      
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {fetchData()}, []) // el parametro '[]' vacion indica que el parametro se ejecute una sola vez

  function Pokemon({ avatar, name }) {
    return (
      <figure className='post-card'>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

  return (
    <>
      <h3>AJax Async con Hooks</h3>
      <div className='grid-fluid black'>
      {pokemons.length === 0
       ? (<p>Cargando...</p>) // si el tamanho del array es "0"
       : (pokemons.map((el) => ( // sino, recore el array y renderiza un componente "<Pokemon />""
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
      </div>
    </>
  );
}
