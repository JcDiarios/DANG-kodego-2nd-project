import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpacePrisonEscape2Image from "../games/gameimg/Space Prison Escape 2 - 512x340.jpeg"; // Include the appropriate file extension

const SpacePrisonEscape2 = () => {
  return (
    <GamePreview
    name="Space Prison Escape 2"
    imageUrl={SpacePrisonEscape2Image}
    gameUrl="https://html5.gamedistribution.com/1a4417c79ee64dcea8fd131df207c08e/?gd_sdk_referrer_url=https://gamedistribution.com/games/space-prison-escape-2"
    />
  );
};

export default SpacePrisonEscape2;
