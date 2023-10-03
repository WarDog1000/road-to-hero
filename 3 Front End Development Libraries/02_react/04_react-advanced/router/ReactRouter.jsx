import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Container from '../src/components/Container';
import Error404 from '../src/pages/Error404';
import Home from '../src/pages/Home';
import Rutas from '../src/pages/Rutas';
import Parametros from '../src/pages/Parametros';
import ParametrosQuery from '../src/pages/ParametrosQuery';
import Redirecciones from '../src/pages/Redirecciones';
import Next from '../src/pages/Next';
import RutasAnidadas from '../src/pages/RutasAnidadas';
import Anidada from '../src/pages/Anidada';
function ReactRouter() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/router' element={<Rutas />} />
            <Route path='/acerca' element={<Navigate to="/router" />} />
            <Route path='/params' element={<Parametros />} />
            <Route path='/params/:username/:age' element={<Parametros />} />
            <Route path='/query' element={<ParametrosQuery />} />
            <Route path='/redirections' element={<Redirecciones />} />
            <Route path='/redirections/next' element={<Next />} />
            <Route path='/redirections/prev' element={<Navigate to='/redirections' />} />
            <Route path='/routematch' element={<RutasAnidadas />}>
              <Route path="nest" element={<Anidada />} />
              <Route path="etc" element={<Home />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default ReactRouter