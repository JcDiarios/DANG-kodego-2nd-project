import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useState } from 'react';

const GamePreview = ({ name, imageUrl, gameUrl }) => {
  const [isGameOpen, setGameOpen] = useState(false);

  const openGame = () => {
    window.open(gameUrl, '_blank');
  };

  const closeGame = () => {
    setGameOpen(false);
  };

  const gameIframe = (
    <iframe
      title={name}
      src={gameUrl}
      height="720"
      width="1280"
      scrolling='no'
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['17.5deg', '-17.5deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-17.5deg', '17.5deg']
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div>
      {isGameOpen ? (
        <div className="text-center">
          {gameIframe}
          <button onClick={closeGame}>Close Game</button>
        </div>
      ) : (
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: 'preserve-3d',
          }}
          className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
          onClick={openGame}
        >
          <div
            style={{
              transform: 'translateZ(75px)',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 shadow-lg"
          >
            <img
              style={{
                transform: 'translateZ(50px)',
              }}
              src={imageUrl}
              alt={`${name} Preview`}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GamePreview;
