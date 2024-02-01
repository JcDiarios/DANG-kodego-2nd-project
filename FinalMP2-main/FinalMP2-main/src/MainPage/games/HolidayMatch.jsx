import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HolidayMatchImage from "../games/gameimg/holidaymatch300.webp"; // Include the appropriate file extension

const HolidayMatch = () => {
  return (
    <GamePreview
      imageUrl={HolidayMatchImage}
      gameUrl="https://cdn.htmlgames.com/HolidayMatch/"
    />
  );
};

export default HolidayMatch;