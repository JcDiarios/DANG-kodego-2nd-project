import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WormsZoneASlitherySnakeImage from "../games/gameimg/Worms Zone a Slithery Snake - 512x340.jpeg"; // Include the appropriate file extension

const WormsZoneASlitherySnake = () => {
  return (
    <GamePreview
    name="Worms Zone A Slithery Snake"
    imageUrl={WormsZoneASlitherySnakeImage}
    gameUrl="https://html5.gamedistribution.com/5dd0b18fb81d49da82ff459f08737390/?gd_sdk_referrer_url=https://gamedistribution.com/games/worms-zone-a-slithery-snake"
    />
  );
};

export default WormsZoneASlitherySnake;
