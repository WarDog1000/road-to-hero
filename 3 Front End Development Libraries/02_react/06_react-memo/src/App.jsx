import Contador from "./components/Contador";

function App() {
  return (
    <>
      <h1>Memorizacion en React</h1>
      <hr />
      <p>Teoria</p>
      <section>
        <h2>memo</h2>
        <ul>
          <li>Se encarga de memorizar un componente;</li>
          <li>Evita re-renderizado;</li>
          <li>Hay que evitarlo en la medida de lo posible, pues podria ser mas costosa la tarea de memorizacion que el re-renderizado del componente;</li>
          <li>Usalo cuando:
            <ul>
              <li>Tenemos muchos elementos rederizados en una lista.</li>
              <li>Llamamos datos de APIs.</li>
              <li>Un componente se vuelve muy pesado.</li>
              <li>Salen alertas de rendimiento en la consola.</li>
            </ul>
          </li>
        </ul>
        <h2>useCallback</h2>
        <ul>
          <li></li>
        </ul>
        <h2>useMemo</h2>
        <ul>
          <li></li>
        </ul>
      </section>
      <hr />
      <Contador />
    </>
  );
}

export default App;