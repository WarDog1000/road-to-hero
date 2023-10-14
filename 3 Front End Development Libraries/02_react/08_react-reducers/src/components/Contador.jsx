import { useReducer, useState } from "react";


const initialState = {count: 0};

const init = (initialState) => {
  return {
    count: initialState.count +  100
  }
}

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  INCREMENT_5: "INCREMENT_5",
  RESET: "RESET"
}

// la funcion reductora se declarabfuera del componente, siempre retorna es "state"
function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {count: state.count + 1};
    case TYPES.DECREMENT:
      return {count: state.count -1};
    case TYPES.RESET:
      return initialState;
    case TYPES.INCREMENT_5:
      return {count: state.count + action.payload}
    case TYPES.DECREMENT_5:
      return {count: state.count - action.payload}
    default:
      return state;
  }
}

function Contador() {
  // const [count, setCount] = useState(0);
  // REDUCERS
  const [state, dispatch] = useReducer(reducer, initialState, init) // "init" vale solo cuando se monta el componente, es opcional (en la practica no se suele usar mucho)

  // const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({type: "INCREMENT"});

  // const restar = () => setCount(count + 1);
  const restar = () => dispatch({type: "DECREMENT"});

  const reset = () => dispatch({type: TYPES.RESET});
  const increment5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});
  const decrement5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5});

  return (
    <div style={{textAlign: "center"}}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={increment5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={decrement5}>-5</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
}

export default Contador;