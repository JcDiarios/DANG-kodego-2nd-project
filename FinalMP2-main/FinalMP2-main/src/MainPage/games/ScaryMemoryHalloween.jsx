import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ScaryMemoryHalloweenImage from "../games/gameimg/Scary Memory Halloween - 200x120.png"; // Include the appropriate file extension

const ScaryMemoryHalloween = () => {
  return (
    <GamePreview
    name="Scary Memory Halloween"
    imageUrl={ScaryMemoryHalloweenImage}
    gameUrl="https://html5.gamedistribution.com/d4a849f2411248b99f0b355d04a55616/?gd_sdk_referrer_url=https://gamedistribution.com/games/scary-memory-halloween"
    />
  );
};

export default ScaryMemoryHalloween;