import React, { Component, useSate, useEffect, useState } from 'react'
export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0)
  const [name, setName] = useState("jhony")
  
  useEffect(() => { // se ejecutara cada que 'scrollY' tenga cambios
    
    console.log("Moviendo el Scroll")
    const detectarScroll = () => setScrollY(window.pageYOffset)
    // detectarScroll() // Llamo a la funcion
    window.addEventListener("scroll", detectarScroll)

    // cuando el state ya no exista 
    return () => {
      window.removeEventListener("scroll", detectarScroll)
      console.log("Fase de desmontaje")
    }

  }, [scrollY])

  useEffect(() => { // se ejecutara unicamente en la fase de montaje
    console.log("Fase de montaje")
  }, [])

  useEffect(() => { // se actualiza cada que se vuelva a renderizar el DOM
    console.log("Fase de actualizacion")
  })
  
  useEffect(() => { // se actualiza unicamente en la fase de desmontaje
    return () => {
      console.log("Fase de desmontaje")
    }
  })

  return(
    <>
      <h2>Hooks useEffect y el Siclo de Vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  )
}