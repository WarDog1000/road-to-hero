import { ContextProvider } from './context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </>
  );
}