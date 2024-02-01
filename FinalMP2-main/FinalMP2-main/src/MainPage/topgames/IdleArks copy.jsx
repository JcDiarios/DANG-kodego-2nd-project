import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import IdleArksImage from "../games/img/Idle Arks_ Sail and Build 2 - 512x512.jpeg"; // Include the appropriate file extension

const IdleArks = () => {
  return (
    <GamePreview
      imageUrl={IdleArksImage}
      gameUrl="http://html5.gamedistribution.com/c0ec991f116f46a792605460350616ea/?gd_sdk_referrer_url=https://gamedistribution.com/games/poop-clicker-2"
    />
  );
};

export default IdleArks;