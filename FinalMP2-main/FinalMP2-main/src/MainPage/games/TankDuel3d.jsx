import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TankDuel3dImage from "../games/gameimg/Tank Duel 3D - 512x340.jpeg"; // Include the appropriate file extension

const TankDuel3d = () => {
  return (
    <GamePreview
    name="Tank Duel 3D"
    imageUrl={TankDuel3dImage}
    gameUrl="https://html5.gamedistribution.com/5a8a11c38eaa4381a59ff549e7b9acbb/?gd_sdk_referrer_url=https://gamedistribution.com/games/tank-duel-3d"
    />
  );
};

export default TankDuel3d;
