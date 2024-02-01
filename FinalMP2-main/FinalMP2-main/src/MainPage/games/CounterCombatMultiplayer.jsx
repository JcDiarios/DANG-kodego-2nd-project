import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CounterCombatMultiplayerImage from "../games/gameimg/Counter Combat Multiplayer - 512x340.jpeg"; // Include the appropriate file extension

const CounterCombatMultiplayer = () => {
  return (
    <GamePreview
    name="Counter Combat Multiplayer"
    imageUrl={CounterCombatMultiplayerImage}
    gameUrl="https://html5.gamedistribution.com/c49a084b24424b219b2ea20c94d5e4c4/?gd_sdk_referrer_url=https://gamedistribution.com/games/counter-combat-multiplayer"
    />
  );
};

export default CounterCombatMultiplayer;
