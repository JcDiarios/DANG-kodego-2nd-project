import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CreedImage from "../games/img/Assassin's Creed Freerunners - 512x512.jpg"; // Include the appropriate file extension

const Creed = () => {
  return (
    <GamePreview
      imageUrl={CreedImage}
      gameUrl="https://html5.gamedistribution.com/b5e69d9778554b0e9cb0a6d5d6a0e43d/?gd_sdk_referrer_url=https://gamedistribution.com/games/assassin's-creed-freerunners"
    />
  );
};

export default Creed;