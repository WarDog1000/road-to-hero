import { Link, Outlet } from "react-router-dom";
function Productos({productos}) {
  return (
    <>
     <section>
      <h1>Productos</h1>
      <ul>
        {productos.map(prod => <li key={prod.id}><Link to={`/productos/${prod.id}`} >{prod.nombre}</Link></li>)}
      </ul>
     </section>
     {/* este componente solo se renderisa cuando la ruta http accede a los elementos aninados del elemento "Route" */}
     <Outlet />
    </>
  );
}
export default Productos