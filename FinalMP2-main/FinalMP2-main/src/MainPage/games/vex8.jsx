import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Vex8Image from "../games/gameimg/Vex 8 - 512x340.jpg"; // Include the appropriate file extension

const Vex8 = () => {
  return (
    <GamePreview
    name="Vex 8"
    imageUrl={Vex8Image}
    gameUrl="https://html5.gamedistribution.com/949009d40a2846f89f887de2285d6c28/?gd_sdk_referrer_url=https://gamedistribution.com/games/vex-8"
    />
  );
};

export default Vex8;
