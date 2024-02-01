import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SharkImage from "../games/img/Hungry Shark Arena - 512x512.jpeg"; // Include the appropriate file extension

const Shark = () => {
  return (
    <GamePreview
      imageUrl={SharkImage}
      gameUrl="https://html5.gamedistribution.com/1afba37790cf4c9696e6e6496f3a180d/?gd_sdk_referrer_url=https://gamedistribution.com/games/hungry-shark-arena"
    />
  );
};

export default Shark;