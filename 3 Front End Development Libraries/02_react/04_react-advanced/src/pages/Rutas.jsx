import { Link, NavLink } from "react-router-dom"
function Rutas() {
  return (
    <>
      <h2>React Router conceptos basicos</h2>
      <nav className="menu">
        <ol>
          <li>
            <span>Enlaces HTML (no recomendado)</span>
            <a href="/">Home</a>
            <a href="/acerca">Acerca</a>
            <a href="/contacto">contacto</a>
          </li>
          <li>
            <span>Componente Link</span>
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/asdfasd">Invalid</Link>
          </li>
          <li>
            <span>Componente NavLink</span>
            <NavLink className={({isActive}) => (isActive ? "active-link" : null)} to="/">Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? "active-link" : null)} to="/router">Router</NavLink>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Rutas