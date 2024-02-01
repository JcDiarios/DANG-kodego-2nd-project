import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from "../../assets/DANG.gif";
import { auth } from '../../firebase/Firebase';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { name, profilePhoto, email } = useGetUserInfo();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
        <div className="h-12 mr-3 absolute">
  <img src={logoImage} className="w-full h-full" alt="DANG LOGO" />
</div>
        </a>
        <div className="flex items-center md:order-2 px-2 py-4">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={profilePhoto} alt="user photo" />
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              className="z-50 absolute right-0 top-full mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{name}</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={signUserOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <ul className="flex space-x-16">
            <li>
            <NavLink to="/page" className="text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                TOP GAMES
              </NavLink>
            </li>
            <li>
              <NavLink to="/pvp"
               href="#" className="text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                ARCADE
                </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" className="text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                MORE GAMES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
