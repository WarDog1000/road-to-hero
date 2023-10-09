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
import RutasProtegidas, { LandingPage, DashboardPage, HomePage, AnalyticsPage, AdminPage } from '../src/pages/RutasProtegidas';
import { useState } from 'react';
import ProtectedRoute from '../src/components/ProtectedRoute';

function ReactRouter() {

  const [auth, setAuth] = useState(null)
  const login = () => { setAuth({id: 1, name: "jhony"})}
  const logout =() => { setAuth(null)}


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
              <Route path="etc" element={<h1>Ruta Anidada 2</h1>} />
            </Route>
            <Route  path='/protectedroutes' element={<RutasProtegidas login={login} logout={logout} auth={auth} />} >
              <Route  path='landing' element={<LandingPage />} />
              <Route path='home' element={!auth ? <Navigate to='/protectedroutes/landing' /> : <HomePage />} />
              {/* rutas protegidas personalizadas */}
              <Route path='admin' element={
                <ProtectedRoute auth={auth} to="/">
                  <AdminPage />
                </ProtectedRoute>
              } />
               {/* anidacion de "varias" rutas protegidas */}
              <Route element={<ProtectedRoute auth={auth} />}>
                <Route path='dashboard' element={<DashboardPage  />} />
                <Route path='analytics' element={<AnalyticsPage />} />
              </Route>
            </Route>
            <Route index element={<Home />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default ReactRouter