import { Link } from "react-router-dom";

function Next() {
  return (
    <div>
      <nav className="menu">
      {"<<<"}
      <Link to="/redirections/prev">to = {'"/redirections/prev " ?'}</Link>
    </nav>
    </div>
  );
}

export default Next;