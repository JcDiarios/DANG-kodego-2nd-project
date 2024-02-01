import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import BallRace from '../topgames/BallRace';
import Clancy from '../topgames/Clancy';
import Creed from '../topgames/Creed';
import DunkShot from '../topgames/DunkShot';

import IdleArks from '../topgames/IdleArks copy';
import Miner from '../topgames/Miner';
import Stack from '../topgames/Stack';
import Warrior from '../topgames/Warrior';
import Nav from './Nav';

const itemsPerPage = 4;

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const games = [
  
    
    <Warrior/>,
  <BallRace/>,
  <Stack/>,
 <Clancy/>,
  <Creed/>,
  <DunkShot/>,
  <Miner/>,
  <IdleArks/>,



];
  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <Nav />
      <section
        className="bg-cover h-screen bg-center bg-no-repeat"
        
      >
        <div className="px-22 mx-auto max-w-screen-xl text-center py-14 lg:py-26">
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl">
            WELCOME TO DANG GAME HUB
          </h1>
        </div>
      
      <div className="p-4  flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentGames.map((game, index) => (
            <div key={index} className="p-4 flex items-center justify-center">
              {game}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <ReactPaginate
           previousLabel={'👈'}
           nextLabel={'👉'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination flex space-x-2'}
            pageLinkClassName={'px-4 py-2 rounded-lg bg-blue-500 text-white'}
            activeClassName={'bg-blue-700 text-white'}
          />
          
        </div>
      </div>
      </section>
    </div>
  );
};

export default MainPage;
