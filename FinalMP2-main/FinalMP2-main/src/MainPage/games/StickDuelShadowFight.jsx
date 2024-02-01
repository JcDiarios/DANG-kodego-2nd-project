import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import StickDuelShadowFightImage from "../games/gameimg/Stick Duel_ Shadow Fight - 512x340.jpeg"; // Include the appropriate file extension

const StickDuelShadowFight = () => {
  return (
    <GamePreview
    name="Stick Duel:Shadow Fight"
    imageUrl={StickDuelShadowFightImage}
    gameUrl="https://html5.gamedistribution.com/19e5608038424b94990e8bbc233aa16d/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-duel:-shadow-fight"
    />
  );
};

export default StickDuelShadowFight;
