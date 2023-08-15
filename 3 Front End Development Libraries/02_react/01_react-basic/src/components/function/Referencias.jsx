import{ createRef, useRef } from 'react';

export default function Referencias() {
  let refMenuBtn = useRef()
  let refMenu = useRef()
  // let refMenuBtn = createref() // for class components
  const handleToogleMenu = (e) => {
    
    // const $menu = document.getElementById('menu')
    // if(e.target.textContent === 'Menu') {
      //   e.target.textContent = "Cerrar"
      //   $menu.style.display = "block"
      // } else {
        //   e.target.textContent = "Menu"
        //   $menu.style.display = "none"
    if(refMenuBtn.current.textContent === 'Menu') {
        refMenuBtn.current.textContent = "Cerrar"
        refMenu.current.style.display = "block"
      } else {
        refMenuBtn.current.textContent = "Menu"
        refMenu.current.style.display = "none"
      }
  }
  
  return(
    <>
    <h2>Referencias</h2>
    <button id="menu-btn" ref={refMenuBtn} onClick={handleToogleMenu}>Menu</button>
    <nav id="menu" ref={refMenu} style={{display:"none"}}>
      <a href="#">Seccion1</a>
      <br />
      <a href="#">Seccion2</a>
      <br />
      <a href="#">Seccion3</a>
      <br />
      <a href="#">Seccion4</a>
      <br />
      <a href="#">Seccion5</a>
      <br />
    </nav>
    </>
  )
}