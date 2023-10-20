import reduxImg from "../assets/redux.jpg";
import reduxGif from "../assets/redux.gif";
export default function TeaoriaRedux() {
  return (
    <>
      <h2>Teoria y Conceptos</h2>
      <ul>
        <li><b><i>Store</i></b>, contiene el <i>sate</i>, (uno por aplicacion).</li>
        <li><b>Dispatch</b>, ejecuta una accion que realizara el <i>state</i>.</li>
        <li><b>Action</b>, objeto <i>JS</i> con 2 propriedades: <i>type</i> y <i>payload</i>{" "} (datos).</li>
        <li><b>Subscribe</b>, es un manejador de eventos para el <i>state</i>.</li>
        <li><b>Reducers</b>, son funciones que gestionan los <i>actions</i>.</li>
      </ul>
      <img src={reduxImg} alt="Diagrama Redux" />
      <img src={reduxGif} alt="Diagrama Redux Animado" />
    </>
  )
}
