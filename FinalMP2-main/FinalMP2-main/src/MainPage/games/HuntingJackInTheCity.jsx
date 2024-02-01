import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HuntingJackInTheCityImage from "../games/gameimg/huntingjackinthecity300200.webp"; // Include the appropriate file extension

const HuntingJackInTheCity = () => {
  return (
    <GamePreview
      imageUrl={HuntingJackInTheCityImage}
      gameUrl="https://cdn.htmlgames.com/HuntingJackInTheCity/"
    />
  );
};

export default HuntingJackInTheCity;