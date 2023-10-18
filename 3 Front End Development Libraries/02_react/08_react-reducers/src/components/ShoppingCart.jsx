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
  const removeFromCart = (id, all = false) =>  { 
    if(all) {
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})}
    }
    
  const clearCart = () => { dispatch({type: TYPES.CLEAR_CART})};

  
  return (
    <div style={{textAlign: "center"}}>
      <h2>Carrito de Compras con Reducers</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos.map((el) => <ProductItem key={el.id} data={el} addToCart={addToCart} />)}
      </article>
        <h3>Carrito</h3>
      <article className="box grid-responsive"> 
        {cart.map((item, index) => <CartItem key={item.id} data={item} removeFromCart={removeFromCart} />)}
        <button onClick={clearCart}>Limpiar Carrito</button>
      </article>
    </div>
  );
}

export default ShoppingCart;