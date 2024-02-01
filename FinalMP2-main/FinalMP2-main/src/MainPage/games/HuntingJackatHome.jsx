import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HuntingJackAtHomeImage from "../games/gameimg/huntingjackathome300200.webp"; // Include the appropriate file extension

const HuntingJackAtHome = () => {
  return (
    <GamePreview
      imageUrl={HuntingJackAtHomeImage}
      gameUrl="https://cdn.htmlgames.com/HuntingJackAtHome/"
    />
  );
};

export default HuntingJackAtHome;