import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MelodicTilesImage from "../games/gameimg/Melodic Tiles - 512x340.jpg"; // Include the appropriate file extension

const MelodicTiles = () => {
  return (
    <GamePreview
    name="Melodic Tiles"
    imageUrl={MelodicTilesImage}
    gameUrl="https://html5.gamedistribution.com/b444986eae654626adf41721cab7040b/?gd_sdk_referrer_url=https://gamedistribution.com/games/melodic-tiles"
    />
  );
};

export default MelodicTiles;