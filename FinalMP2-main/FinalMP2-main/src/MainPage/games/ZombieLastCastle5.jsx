import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ZombieLastCastle5Image from "../games/gameimg/Zombie Last Castle 5 - 512x340.jpeg"; // Include the appropriate file extension

const ZombieLastCastle5 = () => {
  return (
    <GamePreview
    name="Zombie Last Castle 5"
    imageUrl={ZombieLastCastle5Image}
    gameUrl="https://html5.gamedistribution.com/63eb009a2cfd4a7aa7929f1ceaf2ff4b/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-last-castle-5"
    />
  );
};

export default ZombieLastCastle5;
