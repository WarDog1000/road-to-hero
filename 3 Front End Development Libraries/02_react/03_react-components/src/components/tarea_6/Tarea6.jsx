import React from 'react'
import { useModal } from './hooks/useModal';
import Modal from './components/Modal';
// "Portales React.portal"
import ModalPortal from './components/ModalPortal';
function Tarea6() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <>
      Tarea 6 - Modals & Childrens Props
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido del modal 1</p>
        <img src="https://loremflickr.com/400/400" alt="placeimg" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Contenido del modal 2</p>
        <img src="https://loremflickr.com/400/400" alt="flickr" />
      </Modal>
      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Modal 3</h3>
        <p>Contenido del modal 3</p>
        <img src="https://loremflickr.com/400/400" alt="flickr" />
      </Modal>
      <button onClick={openModalPortal}>Modal 3</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
        <p>
          {`
          // index.js
          <body>
            <div id="root"></div>
            <div id="modal"></div>
          </body>


          // ModalPortal.jsx

          return ReactDOM.render(<>content</>, document.getElementById("modal"))
          `

          }
        </p>
        
      </ModalPortal>
    </>
  );
}

export default Tarea6;