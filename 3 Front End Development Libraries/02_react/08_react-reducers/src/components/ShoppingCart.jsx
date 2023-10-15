import { useReducer } from "react";
import { shoppingCartInitialState, shoppingReducer } from "../reducers/shopping.reducers";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shopping.actions";

function ShoppingCart() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingCartInitialState);

  // destructuraciones
  const {productos, cart} = state;

  //FUNCIONES
  const addToCart = (id) => { dispatch({type: TYPES.ADD_TO_CART, payload: id})};
  const delFromCart = (id) => { dispatch({type: TYPES.REMOVE_FROM_CART, payload: id})};
  const removeAll = () => {};
  const clearCart = () => { dispatch({type: TYPES.REMOVE_ALL_FROM_CART})};

  
  return (
    <div>
      <h2>Carrito de Compras con Reducers</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos.map((el) => <ProductItem key={el.id} data={el} addToCart={addToCart} />)}
      </article>
        <h3>Carrito</h3>
      <article className="box grid-responsive">
        {cart.map((item, index) => <CartItem key={item.id} data={item} delFromCart={delFromCart} />)}
        <button onClick={clearCart}>Limpiar Carrito</button>
      </article>
    </div>
  );
}

export default ShoppingCart;