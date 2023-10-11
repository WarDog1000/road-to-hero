// import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Acerca from './pages/Acerca'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Error404 from './pages/Error404'
import Productos from './pages/Productos'
import ProductoDetalles from './pages/ProductoDetalles'
import { useState } from 'react'
import Servicios from './pages/Servicios'

export default function App() {
  const [productos, setProductos] = useState([
    {id: 1, nombre: "Producto1", precio: "100"},
    {id: 2, nombre: "Producto2", precio: "200"},
    {id: 3, nombre: "Producto3", precio: "300"},
    {id: 4, nombre: "Producto4", precio: "400"}
  ])
  return (
    <>
      Hello React Router 6
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/about' element={<Navigate to="/acerca" />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />}>
            <Route path='/productos/:id' element={<ProductoDetalles productos={productos} />} />
          </Route>
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<h2>Este el el anidado de /servicios</h2>} />
          </Route>
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      {/* <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/about' element={<Navigate to="/acerca" />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />}>
            <Route path='/productos/:id' element={<ProductoDetalles productos={productos} />} />
          </Route>
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<h2>Este el el anidado de /servicios</h2>} />
          </Route>
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </HashRouter> */}
    </>
  )
}

