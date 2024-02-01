import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CookingChefFoodFeverImage from "../games/gameimg/Cooking Chef Food Fever - 512x340.jpeg"; // Include the appropriate file extension

const CookingChefFoodFever = () => {
  return (
    <GamePreview
    name="Cooking Chef Food Fever"
    imageUrl={CookingChefFoodFeverImage}
    gameUrl="https://html5.gamedistribution.com/8588773ce5604382b43333f525a70f4c/?gd_sdk_referrer_url=https://gamedistribution.com/games/cooking-chef-food-fever"
    />
  );
};

export default CookingChefFoodFever;