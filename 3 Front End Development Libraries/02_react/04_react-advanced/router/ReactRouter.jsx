import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Container from '../src/components/Container';
import Error404 from '../src/pages/Error404';
import Home from '../src/pages/Home';
import Rutas from '../src/pages/Rutas';
import Parametros from '../src/pages/Parametros';
import ParametrosQuery from '../src/pages/ParametrosQuery';
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
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default ReactRouter