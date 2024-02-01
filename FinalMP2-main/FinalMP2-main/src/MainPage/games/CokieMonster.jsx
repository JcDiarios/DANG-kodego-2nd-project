import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CokieMonsterImage from "../games/gameimg/cookiemonster300.webp"; // Include the appropriate file extension

const CokieMonster = () => {
  return (
    <GamePreview
      imageUrl={CokieMonsterImage}
      gameUrl="https://cdn.htmlgames.com/CookieMonster/"
    />
  );
};

export default CokieMonster;