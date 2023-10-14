import { useReducer, useState } from "react";


const initialState = {count: 0}

// la funcion reductora se declarabfuera del componente, siempre retorna es "state"
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1};
    case "DECREMENT":
      return {count: state.count -1};
    default:
      return state;
  }
}

function Contador() {
  // const [count, setCount] = useState(0);
  // REDUCERS
  const [state, dispatch] = useReducer(reducer, initialState)

  // const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({type: "INCREMENT"});

  // const restar = () => setCount(count + 1);
  const restar = () => dispatch({type: "DECREMENT"});

  return (
    <div style={{textAlign: "center"}}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
}

export default Contador;