import React, { useState, useEffect } from 'react';
export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const [visible, setVisisble] = useState(false)
  // USE EFFECT
  useEffect(() => {
    let temporizador
    if(visible) { // visible === true
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString())
      }, 1000);
    } else {
      clearInterval(temporizador)
    }

    return () => {
      // console.log("Fase de Desmontaje")
      clearInterval(temporizador)
    }
  },[visible]) // solo se ejecutara cuando la 'visible' experimente cambios
  return(
    <>
      <h3>Reloj con Hooks</h3>
      {visible && <Reloj hora={hora}/>}
      <button onClick={() => setVisisble(true)}>Iniciar</button>
      <button onClick={() => setVisisble(false)}>Detener</button>
    </>
  )
}


function Reloj(props) {
  return(
    <>
      <p>{props.hora}</p>
    </>
  )
}