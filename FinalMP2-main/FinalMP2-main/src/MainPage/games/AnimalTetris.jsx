import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AnimalTetrisImage from "../games/gameimg/animaltetris300200.webp"; // Include the appropriate file extension

const AnimalTetris = () => {
  return (
    <GamePreview
      imageUrl={AnimalTetrisImage}
      gameUrl="https://cdn.htmlgames.com/AnimalTetris/"
    />
  );
};

export default AnimalTetris;