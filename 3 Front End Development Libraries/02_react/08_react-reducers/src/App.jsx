import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';
import Crud from './crud/Crud';
function App() {
  return (
    <>
      <h1>UseReducers</h1>
      <hr />
      <Contador />
      <hr />
      <ContadorMejorado />
      <hr />
      <ShoppingCart />
      <hr />
      <Crud />
    </>
  );
}

export default App;