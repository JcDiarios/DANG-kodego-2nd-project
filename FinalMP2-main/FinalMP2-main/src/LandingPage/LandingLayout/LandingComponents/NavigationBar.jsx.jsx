import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logoImage from "../../../../src/assets/DANG.gif";
import Modal from './Modal'; // Import the Modal component


const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <nav className="bg-gradient-to-br backdrop-blur-lg fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
          <div className="h-12 mr-3 absolute">
  <img src={logoImage} className="w-full h-full" alt="DANG LOGO" />
</div>
            
          </a>
          <div className="flex md:order-2">
            <button onClick={openModal} type="button" className="text-white bg-gradient-to-br backdrop-blur-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"style={{ fontFamily: 'Badoom, sans-serif' }}>
              Get started
            </button>
          </div>
          <div>
          </div>
          
          <div className="items-center justify between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gradient-to-br backdrop-blur-lg">
            <Link
    to="home"  
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <div href="#" className="block py-1 pl-2 pr-2 text-white rounded hover:bg-blue-800" style={{ cursor: 'pointer' }}>
      Home
      </div>
  </Link>
              <li>
  <Link
    to="services"  
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <div href="#" className="block py-1 pl-2 pr-2 text-white rounded hover:bg-blue-800" style={{ cursor: 'pointer' }}>
      About Us
    </div>
  </Link>
</li>
<li>
  <Link
    to="dev"  
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <div href="#" className="block py-1 pl-2 pr-2 text-white rounded hover:bg-blue-800" style={{ cursor: 'pointer' }}>
      Services
    </div>
  </Link>
</li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default NavigationBar;
