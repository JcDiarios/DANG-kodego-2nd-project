import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RuneMahjongImage from "../games/gameimg/runemahjongg300200.webp"; // Include the appropriate file extension

const RuneMahjong = () => {
  return (
    <GamePreview
      imageUrl={RuneMahjongImage}
      gameUrl="https://cdn.htmlgames.com/RuneMahjongg/"
    />
  );
};

export default RuneMahjong;