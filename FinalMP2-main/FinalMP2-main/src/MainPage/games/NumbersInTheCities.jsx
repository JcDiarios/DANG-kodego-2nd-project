import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NumbersInTheCitiesImage from "../games/gameimg/numbersinthecity300200.webp"; // Include the appropriate file extension

const NumbersInTheCities = () => {
  return (
    <GamePreview
      imageUrl={NumbersInTheCitiesImage}
      gameUrl="https://cdn.htmlgames.com/NumbersInTheCity/"
    />
  );
};

export default NumbersInTheCities;