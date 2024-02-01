import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PalabraCodigoImage from "../games/gameimg/palabra-codigo-dia-300.webp"; // Include the appropriate file extension

const PalabraCodigo = () => {
  return (
    <GamePreview
      imageUrl={PalabraCodigoImage}
      gameUrl="https://cdn.htmlgames.com/PalabraDeCodigoDelDia/"
    />
  );
};

export default PalabraCodigo;