import { useCallback, useState } from 'react';
import ContadorChild from './ContadorChild';
function Contador() {
  const [count, setCount] = useState(0)

  // const sumar =() => setCount(count + 1)
  // const restar =() => setCount(count - 1)

  const sumar = useCallback(() => setCount(count + 1), [count])
  const restar = useCallback(() => setCount(count - 1), [count])

  const [input, setInput] = useState("input no afecta al hijo, porque las funciones callback de sumar y restar no se renderizan cuando input cambia el state")
  const handleInput = (e) => setInput(e.target.value)
  return (
    <>
    <section style={{textAlign:'center'}}>
      <h2>{"import { memo }"}</h2>
      <code>{"import { memo } from 'react'"}</code>
      <br />
      <code>export default memo(ContadorChild);</code>
      <h3>Contador</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{count}</h3>
      
      <h2>{"hook (useCallback)"}</h2>
      <code>{"import { useCallback } from 'react'"}</code>
      <br />
      <code>{"const sumar = useCallback(() => {callback}, [state])"}</code>
      <h3>Input</h3>
      <input type="text" onChange={handleInput} value={input} />
      <p>{input}</p>
      <ContadorChild count={count} sumar={sumar} restar={restar} />
    </section>

    <section>
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
    </section>
    </>
  );
}

export default Contador;