import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RealDriftMultiplayer2Image from "../games/gameimg/Real Drift Multiplayer 2 - 512x340.jpg"; // Include the appropriate file extension

const RealDriftMultiplayer2 = () => {
  return (
    <GamePreview
    name="Real Drift Multiplayer 2"
    imageUrl={RealDriftMultiplayer2Image}
    gameUrl="https://html5.gamedistribution.com/c69e8bc09fd4477392e08b870a9b4f0d/?gd_sdk_referrer_url=https://gamedistribution.com/games/real-drift-multiplayer-2"
    />
  );
};

export default RealDriftMultiplayer2;
