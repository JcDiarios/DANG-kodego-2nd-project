import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MurderMafiaImage from "../games/gameimg/Murder Mafia - 200x120.jpg"; // Include the appropriate file extension

const MurderMafia = () => {
  return (
    <GamePreview
    name="Murder Mafia"
    imageUrl={MurderMafiaImage}
    gameUrl="https://html5.gamedistribution.com/949009d40a2846f89f887de2285d6c28/?gd_sdk_referrer_url=https://gamedistribution.com/games/vex-8"
    />
  );
};

export default MurderMafia;
