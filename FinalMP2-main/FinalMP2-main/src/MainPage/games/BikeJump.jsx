import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BikeJumpImage from "../games/gameimg/Bike jump - 200x120.jpg"; // Include the appropriate file extension

const BikeJump = () => {
  return (
    <GamePreview
    name="Bike Jump"
    imageUrl={BikeJumpImage}
    gameUrl="https://html5.gamedistribution.com/11148f3a169f4c45b6d19f906f7a8917/?gd_sdk_referrer_url=https://gamedistribution.com/games/bike-jump"
    />
  );
};

export default BikeJump;

