function CartItem({data, removeFromCart, }) {
  let {id, name, price, quantity} = data;
  return (
    <div style={{border: "solid gray", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h3>Elemento del Carrito</h3>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity || "undefined"} = ${price * quantity}.00</h5>
      <button onClick={() => removeFromCart(id)}>Quitar Uno</button>
      <button onClick={() => removeFromCart(id, true)}>Quitar Todos</button>
    </div>
  );
}

export default CartItem;