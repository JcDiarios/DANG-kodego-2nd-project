import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoImage from "../../../assets/DANG.gif";
import Button from "../Button";

const Hero = () => {
  
  return (
    
    <section
    id="home"
    className="w-full px-8 pt-25 pb-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"
    style={{
      minHeight: '100vh', 
      display: 'grid',
    }}
  >
      <div>
      <div className="h-15 relative md:pt-50px pt-0 md:pt-0 pt-14">
  <img src={logoImage} className="h-full" alt="DANG LOGO" />
</div>



<h3 className="text-4xl md:text-6xl font-semibold text-white" style={{ fontFamily: 'Badoom, sans-serif' }}>
  Let's change it up a bit
</h3>
        <p className="text-base md:text-lg text-white my-4 md:my-6">
          Explore our diverse collection of games, handpicked for your enjoyment. Whether you're a casual gamer or a seasoned pro, there's something here for everyone.
        </p>

        <Button /> 

      </div>

      <ShuffleGrid /> 
      

    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://img.gamedistribution.com/af7929c0c4ff49809e1ef448bd5cdc1f-512x384.jpg",
  },
  {
    id: 2,
    src: "https://img.gamedistribution.com/c23c547669904e348202fbba7f5f8306-512x384.jpeg",
  },
  {
    id: 3,
    src: "https://img.gamedistribution.com/136ce9a952c54adf93ef9dbfcc663904-512x384.jpeg",
  },
  {
    id: 4,
    src: "https://img.gamedistribution.com/6ebe84c1df814143978118cf948329ce-512x384.jpeg",
  },
  {
    id: 5,
    src: "https://img.gamedistribution.com/1a353bd608a84d7598621034b3e94f50-512x384.jpeg",
  },
  {
    id: 6,
    src: "https://img.gamedistribution.com/b80dc5dda71643459a4c5fddd998837c-512x384.jpeg",
  },
  {
    id: 7,
    src: "https://img.gamedistribution.com/5200582ee73a42ac996470cdded181fb-512x384.jpg",
  },
  {
    id: 8,
    src: "https://img.gamedistribution.com/c8608aa5e1ee4f61967844ba20a279e9-512x384.jpg",
  },
  {
    id: 9,
    src: "https://img.gamedistribution.com/ebd45dc3b7a64725b73768180208e49a-512x384.jpg",
  },
  {
    id: 10,
    src: "https://img.gamedistribution.com/06c28a7a8e704371af3601d53e31359d-512x384.jpg",
  },
  {
    id: 11,
    src: "https://img.gamedistribution.com/a48e5698b0d647f88fe46c35dddae183-512x384.jpg",
  },
  {
    id: 12,
    src: "https://img.gamedistribution.com/5ea2342908934193855762bc52a812ce-512x384.jpg",
  },
  {
    id: 13,
    src: "https://img.gamedistribution.com/b5e69d9778554b0e9cb0a6d5d6a0e43d-512x384.jpg",
  },
  {
    id: 14,
    src: "https://img.gamedistribution.com/2cd3146ba7e54925a781ac20285c7399-512x384.jpg",
  },
  {
    id: 15,
    src: "https://img.gamedistribution.com/cce037d8ac83427e870620b66f51ed3d-512x384.jpg",
  },
  {
    id: 16,
    src: "https://img.gamedistribution.com/1afba37790cf4c9696e6e6496f3a180d-512x384.jpeg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;