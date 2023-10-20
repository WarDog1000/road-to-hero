import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, clearCart, removeFromCart } from "../actions/shopping.actions";

function ShoppingCart() {
  const {shopping} = useSelector(state => state);
  // destructuraciones
  const {productos, cart} = shopping;
  
  const dispatch = useDispatch();
  
  return (
    <div style={{textAlign: "center"}}>
      <h2>Carrito de Compras con REDUX</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos.map((el) => <ProductItem key={el.id} data={el} addToCart={() => dispatch(addTocart(el.id))} />)}
      </article>
        <h3>Carrito</h3>
      <article className="box grid-responsive"> 
        {cart.map((item, index) => <CartItem key={item.id} data={item} delOne={() => dispatch(removeFromCart(item.id))} delAll={() => dispatch(removeFromCart(item.id, true))} />)}
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
      </article>
    </div>
  );
}

export default ShoppingCart;