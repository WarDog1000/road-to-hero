import { Link } from "react-router-dom";

function Redirecciones() {
  return (
    <>
    <section>
      <hr />
      <h3>React Router: Redirecciones {"{ Navigate }"} from {'"react-router-dom"'}</h3>
      <code>{"<Route path='/redirections' element={<Redirecciones />} />"}</code><br />
      <code>{"<Route path='/redirections/next' element={<Next />} />"}</code><br />
      <code>{"<Route path='/redirections/prev' element={<Navigate to='/redirections' />} />"}</code>
    </section>
    <br />
    <nav className="menu">
      {">>>"}
      <Link to="/redirections/next">to = {"/next"}</Link>
    </nav>
    </>
  );
}

export default Redirecciones;