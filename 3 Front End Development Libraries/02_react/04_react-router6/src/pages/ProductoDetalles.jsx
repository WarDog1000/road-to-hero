import { useParams, useNavigate } from "react-router-dom";
function ProductoDetalles({productos}) {
  // "parametros de navegacion http"
  const {id} = useParams()
  function getProduct(id) {
    return productos.find( prod => prod.id.toString() === id)
  }
  const producto = getProduct(id)


  // "navegacion http"
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1) // regresa a la pagina anterior
  }
  return (
    <>
    Detalle del producto:
    <h4>{`Nombre: ${producto.nombre}`}</h4>
    <h4>{`ID: ${producto.id}`}</h4>
    <h4>{`Precio: $${producto.precio}`}</h4>
    <button onClick={handleBack}>Regresar</button>
    </>
  );
}

export default ProductoDetalles;