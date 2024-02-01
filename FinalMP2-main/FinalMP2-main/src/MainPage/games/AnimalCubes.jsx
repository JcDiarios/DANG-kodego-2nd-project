import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AnimalCubesImage from "../games/gameimg/animalcubes300200.webp"; // Include the appropriate file extension

const AnimalCubes = () => {
  return (
    <GamePreview
      imageUrl={AnimalCubesImage}
      gameUrl="https://cdn.htmlgames.com/AnimalCubes/"
    />
  );
};

export default AnimalCubes;