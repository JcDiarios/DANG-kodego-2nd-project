import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import SquirrelConnectionImage from '../games/gameimg/squirrelconnection300200.webp';

const SquirrelConnection = () => {
  return (
    <GamePreview
      name="Squirrel Connection"
      imageUrl={SquirrelConnectionImage}
      gameUrl="https://cdn.htmlgames.com/GalaxyShooter/"
    />
  );
};

export default SquirrelConnection;
