import React, { useState } from 'react';
import Modal from './LandingComponents/Modal';

const Button = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px 4px 0px black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Play Now
      </button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default Button;
