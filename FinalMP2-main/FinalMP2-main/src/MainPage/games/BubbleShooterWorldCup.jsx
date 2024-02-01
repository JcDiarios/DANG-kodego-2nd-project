import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BubbleShooterWorldCupImage from "../games/gameimg/Bubble Shooter World Cup - 512x340.jpg"; // Include the appropriate file extension

const BubbleShooterWorldCup = () => {
  return (
    <GamePreview
    name="Bubble Shooter World Cup"
    imageUrl={BubbleShooterWorldCupImage}
    gameUrl="https://html5.gamedistribution.com/d6a9931b1cf14929adf0653d359ffe6a/?gd_sdk_referrer_url=https://gamedistribution.com/games/bubble-shooter-world-cup-1"
    />
  );
};

export default BubbleShooterWorldCup;