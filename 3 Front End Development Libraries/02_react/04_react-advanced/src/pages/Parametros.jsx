import { useParams } from "react-router-dom"
function Parametros() {
  // let params = useParams()
  // console.log(params)
  let {username = "user", age = "undefined"} = useParams() // obtiene los parametros pasados a la url
  return (
    <>
      <h3>Paso de Parámetros (hook useParams)</h3>
      <p>Pasar parámetros dinámicos en las rutas con React Router, además usamos el hook useParams.</p>
      <br />
      <p>Example:</p>
      <code>localhost:1000/params/jhony/18</code>
      <hr />
      <p>Nombre del usuario <b>{username}</b>: <b>{age}</b> años</p>
    </>
  )
}

export default Parametros