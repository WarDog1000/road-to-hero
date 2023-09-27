import React from 'react'
import Modal from './components/Modal';
import { useModal } from './hooks/usemodal';
function Tarea6() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <>
      Tarea 6 - Modals & Childrens Props
      <button>Modal 1</button>
      <Modal isOpen={isOpenModal1}>
        <h3>Modal 1</h3>
        <p>Contenido del modal 1</p>
        <img src="https://loremflickr.com/400/400" alt="placeimg" />
      </Modal>
      <button>Modal 2</button>
      <Modal isOpen={isOpenModal2}>
        <h3>Modal 2</h3>
        <p>Contenido del modal 2</p>
        <img src="https://loremflickr.com/400/400" alt="flickr" />
      </Modal>
    </>
  );
}

export default Tarea6;