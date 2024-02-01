import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HungrySharkArenaHorrorNightImage from "../games/gameimg/Hungry Shark Arena Horror Night - 512x340.jpeg"; // Include the appropriate file extension

const HungrySharkArenaHorrorNight = () => {
  return (
    <GamePreview
    name="Hungry Shark Arena Horror Night"
    imageUrl={HungrySharkArenaHorrorNightImage}
    gameUrl="https://html5.gamedistribution.com/b80dc5dda71643459a4c5fddd998837c/?gd_sdk_referrer_url=https://gamedistribution.com/games/hungry-shark-arena-horror-night"
    />
  );
};

export default HungrySharkArenaHorrorNight;
