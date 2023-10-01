import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/router">Router</Link>
    </nav>
    </>
  );
}

export default NavBar