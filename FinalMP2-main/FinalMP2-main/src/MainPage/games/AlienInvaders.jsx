import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AlienInvadersImage from "../games/gameimg/alieninvaders300200.webp"; // Include the appropriate file extension

const AlienInvaders = () => {
  return (
    <GamePreview
      imageUrl={AlienInvadersImage}
      gameUrl="https://cdn.htmlgames.com/AlienInvaders/"
    />
  );
};

export default AlienInvaders;