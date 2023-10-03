import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/router">Router</Link>
      <Link to="/params">Params</Link>
      <Link to="/query">Query</Link>
      <Link to="/redirections">Redirections</Link>
      <Link to="/routematch">RouteMatch</Link>
    </nav>
    </>
  );
}

export default NavBar