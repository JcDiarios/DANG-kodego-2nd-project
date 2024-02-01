import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DreamPetConnetionImage from "../games/gameimg/dreampetconnect300200.webp"; // Include the appropriate file extension

const DreamPetCon = () => {
  return (
    <GamePreview
      imageUrl={DreamPetConnetionImage}
      gameUrl="https://cdn.htmlgames.com/DreamPetConnect/"
    />
  );
};

export default DreamPetCon;