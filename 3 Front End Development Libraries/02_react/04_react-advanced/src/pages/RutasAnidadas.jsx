// import {Link, useRouteMatch} from 'react-router-dom'
import {Link} from 'react-router-dom'
function RutasAnidadas() {
  // let match = useRouteMatch();
  return (
    <>
      <h3>Rutas Anidadas</h3>
      <ul>
        <li><Link to="/routematch/nest">Nest</Link></li>
        <li><Link to="/routematch/etc">Etc</Link></li>
      </ul>
    </>
  );
}
export default RutasAnidadas;
