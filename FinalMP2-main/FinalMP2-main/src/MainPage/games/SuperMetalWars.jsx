import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SuperMetalWarsImage from "../games/gameimg/Super Metal Wars  - 512x340.jpeg"; // Include the appropriate file extension

const SuperMetalWars = () => {
  return (
    <GamePreview
    name="Super Metal Wars"
    imageUrl={SuperMetalWarsImage}
    gameUrl="https://html5.gamedistribution.com/1d092c908828431b90be263fd48cca8a/?gd_sdk_referrer_url=https://gamedistribution.com/games/super-metal-wars"
    />
  );
};

export default SuperMetalWars;
