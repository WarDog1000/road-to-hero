import { Provider } from "react-redux";
import TeaoriaRedux from "./components/TeaoriaRedux";
import store from "./store";
import Contador from "./components/Contador";
import ShoppingCart from "./components/ShoppingCart";
// import Crud from "./crud/Crud";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux</h1>
        <hr />
        <Contador />
        <hr />
        <ShoppingCart />
        <hr />
        {/* <Crud /> */}
        <hr />
        <TeaoriaRedux />
      </Provider>
    </>
  );
}
