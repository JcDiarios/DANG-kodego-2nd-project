import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AnimalCon3Image from "../games/gameimg/ancientmahjong300.webp"; // Include the appropriate file extension

const AnimalCon3 = () => {
  return (
    <GamePreview
      imageUrl={AnimalCon3Image}
      gameUrl="https://cdn.htmlgames.com/AnimalsConnect3/"
    />
  );
};

export default AnimalCon3;