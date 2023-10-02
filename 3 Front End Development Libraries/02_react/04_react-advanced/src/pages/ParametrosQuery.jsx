import { useLocation, useNavigate } from "react-router-dom"
function ParametrosQuery() {
  // let location = useLocation()
  // console.log(location)
  let {search} = useLocation(); // obtiene los parametros query de la url
  let query = new URLSearchParams(search)
  // console.log(query)

  // minimo de vistas por paginacion
  const MIN = 20

  let start = parseInt(query.get("inicio")) || 1 // obtiene el valor "inicio" de la query url
  let end = parseInt(query.get("fin")) || MIN // obtiene el valor "fin" de la query url
  let def = "default"

  let history = useNavigate()
  // DEPRECATED
  // const handlePrev = (e) => { history.push({search: `?inicio=${start - MIN}&fin=${end - MIN}`})}
  // const handleNext = (e) => { history.push({search: `?inicio=${start + MIN}&fin=${end + MIN}`})}
  const handlePrev = () => { history(`?inicio=${start - MIN}&fin=${end - MIN}`)}
  const handleNext = () => { history(`?inicio=${start + MIN}&fin=${end + MIN}`)}


  return (
    <>
      <h3>Parámetros de consulta (hooks useLocation y useHistory)</h3>
      <p>Pasar parámetros de consulta por la url de nuestras rutas con React Router, además usamos los hooks useLocation y useHistory.</p>
      <br />

      <span>El hook <b><i>useLocation</i></b> devuelve el objeto de ubicación que representa la URL actual. Puedes pensar en ello como un estado de uso que devuelve una nueva ubicación cada vez que cambia la URL. Esto podría ser realmente útil, por ejemplo. en una situación en la que le gustaría activar un nuevo evento de "vista de página" utilizando su herramienta de análisis web cada vez que se carga una nueva página, como en el siguiente ejemplo:</span>
      <br />
      <code>localhost:1000/query?inicio=1&fin=20</code>
      <br />
      <p>Mostrando productos del <b>{start || def}</b>* al <b>{end || def}</b>*</p>
      <hr />

      <span>El hook <s><i>useHistory</i></s> <b><i>useNavigate</i></b> le brinda acceso a la instancia del historial que puede usar para navegar.</span>
      <br />
      {/* {Al paginar el valor de "start" aumenta en "MIN" + "start" validando y renderizando el <button>} */}
      {start > MIN &&
      <button onClick={handlePrev}>{"<<"}</button>
      }
      <button onClick={handleNext}>{">>"}</button>
    </>
  )
}

export default ParametrosQuery