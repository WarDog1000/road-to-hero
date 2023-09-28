import React from 'react'
import './Modal.css'
function Modal({children, isOpen, closeModal}) {
  // funcion evitar el cierre cunado ocurre un click en el "container" del modal
  const handleContainerClick = e => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleContainerClick}>
        <button className="modal-close" onClick={closeModal}>X</button>
        <>{children}</>
      </div>
    </article>
  );
}

export default Modal;