import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DeadFightImage from "../games/gameimg/Dead Fight - 512x384.jpeg"; // Include the appropriate file extension

const DeadFight = () => {
  return (
    <GamePreview
    name="Dead Fight"
    imageUrl={DeadFightImage}
    gameUrl="https://html5.gamedistribution.com/64850994e6b5424ea6c06e0244d829db/?gd_sdk_referrer_url=https://gamedistribution.com/games/dead-fight"
    />
  );
};

export default DeadFight;
