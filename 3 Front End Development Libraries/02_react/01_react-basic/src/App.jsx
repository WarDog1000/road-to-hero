import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ClassComponent from './components/01_ClassComponent'
import FunctionComponent from './components/02_FunctionComponent'
import ExpresedComponent from './components/03_ExpresedComponent'
import Properties from './components/04_Properties'
import Estado from './components/05_Estado'
import RenderizadoCondicional from './components/06_RenderizadoCondicional'
import RenderizadoElementos from './components/07_RenderizadoElementos'
import {EventosES6, EventosES7, MasSobreEventos} from './components/08_Eventos'
import ComunicacionComponents from './class-components/ComunicacionComponents'
import CicloVida from './class-components/CicloVida'
import AjaxApis from './class-components/AjaxApis'
import ContadorHooks from './function-components/ContadorHooks'



function App() {
  const [count, setCount] = useState(0)
  const nombre = "Jhony"
  const auth = false
  const estaciones = ["primavera", "Verano", "Otonho", "Invierno"]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      <h2>Hola mundo con Vite y React</h2>
      <h1>{nombre}</h1>
      <p>{auth ? "El usuario esta logueado" : "El usuario no esta logueado"}</p>
      <p>{2 + 1}</p>
      <ul>
        {estaciones.map((el, index)=> <li key={index}>{el}</li>)}
      </ul>
      <hr />
      <h2>Components</h2>
      <section>
         <ClassComponent msg="Hola soy un componente de clase"/>
      </section>
      <section>
        <FunctionComponent msg="Hola soy un componente de funcion (declarada)"/>
      </section>
      <section>
        <ExpresedComponent msg="Hola soy un componente de funcion expresada (arrows)"/>
      </section>
      <hr />
      <h2>Properties</h2>
      <section>
        <Properties
         cadena="esta es una propriedad de cadena" 
         numero={10}
         boolean={true}
         array={[1,2,3]}
         object={{nombre:"Jhony", edad:"25"}}
         elementoReact={<i>Esto es un elemento React</i>}
         funcion={num => num * num}
         componenteReact={<ExpresedComponent msg="Soy un componente pasado como props" />} />
      </section>
      <hr />
      <h2>Estado</h2>
      <section>
        <Estado />
      </section>
      <hr />
      <section>
        <RenderizadoCondicional />
      </section>
      <hr />
      <section>
        <RenderizadoElementos />
      </section>
      <hr />
      <section>
        <EventosES6 />
      </section>
      <hr />
      <section>
        <EventosES7 />
      </section>
      <hr />
      <section>
        <MasSobreEventos />
      </section>
      <hr />
      {/* ====== setSate & Class Components ====== */}
      <section>
        {/* un contador */}
        <ComunicacionComponents />
      </section>
      <hr />
      <section>
        {/* un reloj */}
        <CicloVida />
      </section>
      <hr />
      <section>
        {/* poke API */}
        <AjaxApis />
      </section>
      <hr />
      {/* ====== Hooks (/Gancho) & Funtion Components ====== */}
      <section>
        {/* un contador */}
        <ContadorHooks /> {/*setState*/}
      </section>
    </>
  )
}

export default App
