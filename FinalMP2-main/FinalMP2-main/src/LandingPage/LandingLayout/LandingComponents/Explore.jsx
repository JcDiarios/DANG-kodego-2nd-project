import React from 'react';
import Button2 from '../Button2';

const Explore = () => {
  return (
    <section className="bg-gradient-to-br  to-blue-900 backdrop-blur-lg">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore the World of Games! </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Unleash your inner gamer and embark on a journey through our extensive game catalog. From thrilling adventures to heart-pounding action, we've got games for every player.</p>
        
        <Button2>CATALOG</Button2>
       
      </div>
    </section>
  );
};

export default Explore;
