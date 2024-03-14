import { useCounterStore } from "./store/counterStore";
import {shallow} from 'zustand/shallow'

function App() {


  console.log("render!")
  // ENFOQUE 1 ↓
  // const count = useCounterStore((state) => state.count )
  // const title = useCounterStore((state) => state.title )

  // ENFOQUE 2 ↓↑
  const values = useCounterStore((state) => ({
    counter: state.count,
    name: state.title,
    posts: state.posts,
  }), shallow)

  // *** shallow es un parametro de zstand para comparar dos objetos de estado

  // const handleCount = useCounterStore( state => state.increment )
  const { increment, multiply, getPosts, clearStore } = useCounterStore()

  return (
    <div>
      <button onClick={clearStore}>Clear Store</button>
      <h3 className="title">{values.name}</h3>
      <p className="count">{values.counter}</p>
      {/* <button onClick={() => handleCount(10)}>Increment</button> */}
      <button onClick={() => increment(10)}>Increment</button>
      <button onClick={() => multiply(2)}>multiply</button>
      <button onClick={getPosts}>Get posts from jsonplaceholder</button>
      <hr />
      {values.posts && JSON.stringify(values.posts)}
    </div>
  );
}

export default App;