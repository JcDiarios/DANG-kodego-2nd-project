import React from 'react';
import SignInSignUp from './SignInSignUp';

const Modal = ({ closeModal }) => {
  const handleModalClose = () => {
    if (closeModal) {
      closeModal(); 
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="z-10 relative  rounded text-white p-4">
        <button
          className="absolute top-100px right-2 text-white hover:text-gray-900 focus:outline-none"
          onClick={handleModalClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div>
          <SignInSignUp />
        </div>
      </div>
    </div>
  );
};

export default Modal;
