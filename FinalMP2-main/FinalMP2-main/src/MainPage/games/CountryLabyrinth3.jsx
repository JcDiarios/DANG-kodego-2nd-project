import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CountryLabyrinth3Image from "../games/gameimg/countrylabyrinth3300200.webp"; // Include the appropriate file extension

const CountryLabyrinth3 = () => {
  return (
    <GamePreview
      imageUrl={CountryLabyrinth3Image}
      gameUrl="https://cdn.htmlgames.com/CountryLabyrinth3/"
    />
  );
};

export default CountryLabyrinth3;