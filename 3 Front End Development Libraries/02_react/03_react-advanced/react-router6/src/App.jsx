// import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function Acerca() {
  return (
    <h1>Acerca</h1>
  )
}

export default function App() {
  return (
    <>
      Hello React Router 6
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home </h1>} />
          <Route path='/acerca' element={<Acerca />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

