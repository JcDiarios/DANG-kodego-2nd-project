import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MonsterEggBrawlImage from "../games/gameimg/Monster Egg Brawl - 512x340.jpeg"; // Include the appropriate file extension

const MonsterEggBrawl = () => {
  return (
    <GamePreview
    name="Monster Egg Brawl"
    imageUrl={MonsterEggBrawlImage}
    gameUrl="https://html5.gamedistribution.com/a1129689566443afb3394b01ea842237/?gd_sdk_referrer_url=https://gamedistribution.com/games/monster-egg-brawl"
    />
  );
};

export default MonsterEggBrawl;