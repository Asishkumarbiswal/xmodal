import React, { useState } from 'react';
import './App.css';
import ModalForm from './components/ModalForm';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isModalOpen && <ModalForm isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
}

export default App;