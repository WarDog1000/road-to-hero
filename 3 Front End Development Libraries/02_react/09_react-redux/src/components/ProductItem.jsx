const ProductItem = ({data, addToCart}) => {
  let {id, name, price} = data;

  return (
    <div style={{border: "solid gray", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
  
};

export default ProductItem;