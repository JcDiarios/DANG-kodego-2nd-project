import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MainPowerImage from "../games/gameimg/mainpower300200.webp"; // Include the appropriate file extension

const MainPower = () => {
  return (
    <GamePreview
      imageUrl={MainPowerImage}
      gameUrl="https://cdn.htmlgames.com/MainPower/"
    />
  );
};

export default MainPower;