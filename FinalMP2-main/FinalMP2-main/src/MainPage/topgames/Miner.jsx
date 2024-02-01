import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MinerImage from "../games/img/Idle Miner Space Rush - 512x512.jpeg"; // Include the appropriate file extension

const Miner = () => {
  return (
    <GamePreview
      imageUrl={MinerImage}
      gameUrl="https://html5.gamedistribution.com/e063dd2a16cb46fe871e4199007a8b24/?gd_sdk_referrer_url=https://gamedistribution.com/games/idle-miner-space-rush"
    />
  );
};

export default Miner;