import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FishResortImage from "../games/gameimg/Fish Resort - 512x340.jpg"; // Include the appropriate file extension

const FishResort = () => {
  return (
    <GamePreview
    name="Fish Resort"
    imageUrl={FishResortImage}
    gameUrl="https://html5.gamedistribution.com/3fa583eab04348728879965b599bd78c/?gd_sdk_referrer_url=https://gamedistribution.com/games/fish-resort-1"
    />
  );
};

export default FishResort;