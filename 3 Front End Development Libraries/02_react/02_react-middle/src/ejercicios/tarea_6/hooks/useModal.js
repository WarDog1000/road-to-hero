import { useState } from 'react';
export const useModal = (inivalue = false) => {
  const [isOpen, setOpen] = useState(inivalue);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return [isOpen, openModal, closeModal];
}