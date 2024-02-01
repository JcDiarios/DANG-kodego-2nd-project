import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HuntedWolfDefenseGameImage from "../games/gameimg/Hunted Wolf Defense Game - 512x340.jpeg"; // Include the appropriate file extension

const HuntedWolfDefenseGame = () => {
  return (
    <GamePreview
      name="Hunted Wolf Defense"
      imageUrl={HuntedWolfDefenseGameImage}
      gameUrl="https://html5.gamedistribution.com/771d6471409342a784b409a278f893b0/?gd_sdk_referrer_url=https://gamedistribution.com/games/hunted-wolf-defense-game"
    />
  );
};

export default HuntedWolfDefenseGame;