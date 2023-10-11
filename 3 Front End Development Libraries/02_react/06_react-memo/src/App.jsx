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
          <li>memoriza una funcion, para no tener que volverla a definir en cada render.</li>
          <li>Usalo siempre que se pase una funcion como <m>prop</m> a un componente memorizado.</li>
          <li>Usalo siempre que se pase una funcion como parametro de un efecto.</li>
        </ul>
        <h2>useMemo</h2>
        <ul>
          <li>Memoriza un valor calculado, es decir, el resultado de una funcion.</li>
          <li>Genera propriedades computadas.</li>
          <li>Usalo en procesos pesados.</li>
        </ul>
      </section>
      <hr />
      <Contador />
    </>
  );
}

export default App;