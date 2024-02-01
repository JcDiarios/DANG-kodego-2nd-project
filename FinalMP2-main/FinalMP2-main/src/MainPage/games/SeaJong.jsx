import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SeaJongImage from "../games/gameimg/seajong300200.webp"; // Include the appropriate file extension

const SeaJong = () => {
  return (
    <GamePreview
      imageUrl={SeaJongImage}
      gameUrl="https://cdn.htmlgames.com/Seajong/"
    />
  );
};

export default SeaJong;