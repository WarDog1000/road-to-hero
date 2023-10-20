import { Provider } from "react-redux";
import TeaoriaRedux from "./components/TeaoriaRedux";
import store from "./store";
import Contador from "./components/Contador";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux</h1>
        <hr />
        <Contador />
        <hr />
        <TeaoriaRedux />
      </Provider>
    </>
  );
}
