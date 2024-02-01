import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DreamPetImage from "../games/gameimg/dream-pet-dimensions-300.webp"; // Include the appropriate file extension

const DreamPet = () => {
  return (
    <GamePreview
      imageUrl={DreamPetImage}
      gameUrl="https://cdn.htmlgames.com/DreamPetDimensions/"
    />
  );
};

export default DreamPet;