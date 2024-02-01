import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ClancyImage from "../games/img/Tom Clancy's Shootout - 512x512.jpeg"; // Include the appropriate file extension

const Clancy = () => {
  return (
    <GamePreview
      imageUrl={ClancyImage}
      gameUrl="https://html5.gamedistribution.com/6ebe84c1df814143978118cf948329ce/?gd_sdk_referrer_url=https://gamedistribution.com/games/tom-clancy's-shootout"
    />
  );
};

export default Clancy;