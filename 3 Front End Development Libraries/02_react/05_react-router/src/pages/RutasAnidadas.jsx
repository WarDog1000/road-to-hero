// import {Link, useRouteMatch} from 'react-router-dom'
import {Link, Outlet} from 'react-router-dom'
function RutasAnidadas() {
  // let match = useRouteMatch();
  return (
    <>
      <h2>Rutas Anidadas</h2>
      <ul>
        <li><Link to="/routematch/nest">Nest</Link></li>
        <li><Link to="/routematch/etc">Etc</Link></li>
      </ul>
      <Outlet />
    </>
  );
}
export default RutasAnidadas;
