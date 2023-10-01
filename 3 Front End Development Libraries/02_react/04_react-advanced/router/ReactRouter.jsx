import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../src/pages/Home';
import Error404 from '../src/pages/Error404';
import Rutas from '../src/pages/Rutas';
import Container from '../src/components/Container';
function ReactRouter() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/router' element={<Rutas />} />
            <Route path='/' element={<Home />} />
            <Route path='/acerca' element={<Navigate to="/router" />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default ReactRouter