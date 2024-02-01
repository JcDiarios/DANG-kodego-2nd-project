import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongJourneyImage from "../games/gameimg/mahjonggjourney300.webp"; // Include the appropriate file extension

const MahjongJourney = () => {
  return (
    <GamePreview
      imageUrl={MahjongJourneyImage}
      gameUrl="https://cdn.htmlgames.com/MahjonggJourney/"
    />
  );
};

export default MahjongJourney;