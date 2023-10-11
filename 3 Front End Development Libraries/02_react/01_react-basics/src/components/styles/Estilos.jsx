import './Estilos.css'
import moduleStyles from './Estilos.module.css'
import './Estilos.scss'
export default function Estilos() {
  const styleObj = {
    borderRadius: ".2rem",
    margin: "1rem",
    backgroundColor: "rgba(255, 0, 0, .5)"
  }
  return(
    <section className="estilos">
      <h2>Estilos en React</h2>
      <h3 className="bg-react">Estilos en hojas Css externas</h3>
      <h3 style={{borderRadius: ".25rem", margin: "1rem"}} className='bg-react'>Estilos en linea(atributo style)</h3>
      <h3 style={styleObj} className='bg-react'>Estilos en linea(atributo style) usando variables</h3>
      <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
      <h3 className={moduleStyles.success}>Estilos con Modulos</h3>
      <h3 className="bg-sass">Estilos con Sass</h3>
    </section>
  )
}