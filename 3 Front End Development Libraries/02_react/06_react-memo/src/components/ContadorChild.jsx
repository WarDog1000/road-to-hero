import { memo, useMemo } from "react";

function ContadorChild({count, sumar, restar}) {
  console.log("Contador Hijo se renderiza") // esto pasa cada que se actualiza el state "count" del contador padre
  // memoriza un retorno de valor
  const superNumero = useMemo(() =>{
    let numero = 0;
    for(let i=0;i<1000000000;i++) {
      numero++;
    }
    return numero;
  }, [])

  return (
    <>
      <section style={{border:"thin solid #000", margin:"1rem", padding:"1rem"}}>
        <h2>Hijo del Contador</h2>
        <section style={{textAlign:'center'}}>
          <h3>Contador</h3>
          <h4>{count}</h4>
          <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
          </nav>
        </section>
        <section>
          <h2>{"hook {useMemo}"}</h2>
          <code>{"import { useMemo } from 'react'"}</code>
          <br />
          <code>{superNumero}</code>
        </section>
      </section>
    </>
  );
}

export default memo(ContadorChild); // el hook "memo" evita que el componente se vuelva a renderizar mientras este no sufra cambios