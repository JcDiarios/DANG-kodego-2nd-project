import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LostPyramidImage from "../games/gameimg/Lost Pyramid - 512x340.jpeg"; // Include the appropriate file extension

const LostPyramid = () => {
  return (
    <GamePreview
    name="Lost Pyramid"
    imageUrl={LostPyramidImage}
    gameUrl="https://html5.gamedistribution.com/55a75cfa9c7d44199959cf61d05cff0e/?gd_sdk_referrer_url=https://gamedistribution.com/games/lost-pyramid"
    />
  );
};

export default LostPyramid;
