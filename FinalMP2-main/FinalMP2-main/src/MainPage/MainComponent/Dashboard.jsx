import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import AdayInTheMuseum from '../games/AdayInTheMuseum';
import AddItUp from '../games/AddItUp';
import AddItUp2 from '../games/AddItUp2';
import AddItUp3 from '../games/AddItUp3';
import AirportManagement2 from '../games/AirportManagement2';
import AlchemistSymbol from '../games/AlchemistSymbol';
import AliceInTetrisLand from '../games/AliceInTetrisLand';
import AlienInvaders from '../games/AlienInvaders';
import AlienInvaders2 from '../games/AlienInvaders2';
import AllFiveDominos from '../games/AllFiveDominos';
import AllThreesDomino from '../games/AllThreesDomino';
import AmsterdamHiddenObject from '../games/AmsterdamHiddenObject';
import AncientMahjong from '../games/AncientMahjong';
import AnimalCon2 from '../games/AnimalCon2';
import AnimalCon3 from '../games/AnimalCon3';
import AnimalCubes from '../games/AnimalCubes';
import AnimalTetris from '../games/AnimalTetris';
import AnimalsConnect from '../games/AnimalsConnect';
import Anonogramaday from '../games/Anonogramaday';
import BattleShips from '../games/BattleShips';
import BbqRoast from '../games/BbqRoast';
import BeeEnglish from '../games/BeeEnglish';
import BeijingHO from '../games/BeijingHO';
import BerlinHiddenObject from '../games/BerlinHiddenObject';
import BikeJump from '../games/BikeJump';
import Bingo from '../games/Bingo';
import BirdsKyodai from '../games/BirdsKyodai';
import BlacktoWhite from '../games/BlacktoWhite';
import BlitzWizard from '../games/BlitzWizard';
import Blobs from '../games/Blobs';
import BlockDomino from '../games/BlockDomino';
import BlockMonsterExtreme1010 from '../games/BlockMonsterExtreme1010';
import BlockMonsters1010 from '../games/BlockMonsters1010';
import BlockTown from '../games/BlockTown';
import BlueLove from '../games/BlueLove';
import BrickTetris from '../games/BrickTetris';
import Bricks1010 from '../games/Bricks1010';
import BubbleBall from '../games/BubbleBall';
import BubbleShooterWorldCup from '../games/BubbleShooterWorldCup';
import BubbleTrouble from '../games/BubbleTrouble';
import BugCon from '../games/BugCon';
import CandyCon from '../games/CandyCon';
import CandyLandMahjong from '../games/CandyLandMahjong';
import CarParking from '../games/CarParking';
import CarParking2 from '../games/CarParking2';
import CaribbeanSlide from '../games/CaribbeanSlide';
import CarromPool from '../games/CarromPool';
import CastleMahjong from '../games/CastleMahjong';
import CatchTheApple from '../games/CatchTheApple';
import CatleMysteries from '../games/CatleMysteries';
import Cats1010 from '../games/Cats1010';
import CatsHexjong from '../games/CatsHexjong';
import CelticMahjong from '../games/CelticMahjong';
import ChenoceauHO from '../games/ChenoceauHO';
import Chess from '../games/Chess';
import ChinaMahjong from '../games/ChinaMahjong';
import ChinaTemple from '../games/ChinaTemple';
import ChocolateFactory from '../games/ChocolateFactory';
import ChocolateShop from '../games/ChocolateShop';
import CircusAdventures from '../games/CircusAdventures';
import CircusHO from '../games/CircusHO';
import CircusHiddenNumbers from '../games/CircusHiddenNumbers';
import CircusPair from '../games/CircusPair';
import City2048 from '../games/City2048';
import CityFuse from '../games/CityFuse';
import Classic1010 from '../games/Classic1010';
import ClassicFrog from '../games/ClassicFrog';
import ClassicMahjong from '../games/ClassicMahjong';
import ClassicPac from '../games/ClassicPac';
import ClassicSnake from '../games/ClassicSnake';
import ClassicWordSearch from '../games/ClassicWordSearch';
import ClearTheNumbers from '../games/ClearTheNumbers';
import CokieMonster from '../games/CokieMonster';
import ColoringMandalas from '../games/ColoringMandalas';
import ConstructionWeights from '../games/ConstructionWeights';
import CookingChefFoodFever from '../games/CookingChefFoodFever';
import CounterCombatMultiplayer from '../games/CounterCombatMultiplayer';
import CountryLabyrinth3 from '../games/CountryLabyrinth3';
import CreepyCreatures from '../games/CreepyCreatures';
import CrossRobotRoad from '../games/CrossRobotRoad';
import CrossWords2 from '../games/CrossWords2';
import CrossWords3 from '../games/CrossWords3';
import CruciGramasDeldia from '../games/CruciGramasDeldia';
import CruiseShipsHO from '../games/CruiseShipsHO';
import CrystalHexagon from '../games/CrystalHexagon';
import Daily1to25 from '../games/Daily1to25';
import DailyAnagramCrosswords from '../games/DailyAnagramCrosswords';
import DailyCalcudoku from '../games/DailyCalcudoku';
import DailyCheckIt from '../games/DailyCheckIt';
import Dailyfutoshiki from '../games/DailyFutoshiki';
import DailyHexnum from '../games/DailyHexnum';
import DailyHitori from '../games/DailyHitori';
import DailyKakurasu from '../games/DailyKakurasu';
import DailyKakuro from '../games/DailyKakuro';
import DailyLoop from '../games/DailyLoop';
import DailyMahjong from '../games/DailyMahjong';
import DailyNet from '../games/DailyNet';
import DailyNonoGrams from '../games/DailyNonoGrams';
import DailyNumbrix from '../games/DailyNumbrix';
import DailyShikaku from '../games/DailyShikaku';
import DailyStarBattle from '../games/DailyStarBattle';
import DailyStone from '../games/DailyStone';
import DailySudoku from '../games/DailySudoku';
import DailyTracks from '../games/DailyTracks';
import DailyUp15 from '../games/DailyUp15';
import DailyWordoku from '../games/DailyWordoku';
import DarkMahjong from '../games/DarkMahjong';
import DeadFight from '../games/DeadFight';
import DeepSeaTrijong from '../games/DeepSeaTrijong';
import DigDig from '../games/DigDig';
import DiscPoolPlayer1 from '../games/DiscPoolPlayer1';
import DiscPoolPlayer2 from '../games/DiscPoolPlayer2';
import DiscoverChina from '../games/DiscoverChina';
import DiscoverEgypt from '../games/DiscoverEgypt';
import DiscoverPetra from '../games/DiscoverPetra';
import DrackAndFranc from '../games/DrackAndFranc';
import DreamPet from '../games/DreamPet';
import DreamPetCon from '../games/DreamPetCon';
import DropTris from '../games/DropTris';
import EasterMahjong from '../games/EasterMahjong';
import Easterpile from '../games/Easterpile';
import EmojiMahjong from '../games/EmojiMahjong';
import EmojiPairs from '../games/EmojiPairs';
import EndlessBreakOut from '../games/EndlessBreakOut';
import EscapetheForest from '../games/EscapetheForest';
import EuropeanCities from '../games/EuropeanCities';
import ExtremeVexed from '../games/ExtremeVexed';
import FairyTripleMahjong from '../games/FairyTripleMahjong';
import FallingSudoku from '../games/FallingSudoku';
import FamousPainting from '../games/FamousPainting';
import FamousPainting2 from '../games/FamousPainting2';
import FamousPaintings3 from '../games/FamousPaintings3';
import FarmMahjong from '../games/FarmMahjong';
import FarmTown from '../games/FarmTown';
import FeedTheAnimals from '../games/FeedTheAnimals';
import FireBoyAndWaterGirl from '../games/FireBoyAndWaterGirl';
import FishResort from '../games/FishResort';
import FlowerBurst from '../games/FlowerBurst';
import FlowerGarden from '../games/FlowerGarden';
import FlowerGarden2 from '../games/FlowerGarden2';
import FlowerMahjong from '../games/FlowerMahjong';
import FlowerMerge from '../games/FlowerMerge';
import FlowerShop from '../games/FlowerShop';
import FloweSolitaire from '../games/FlowerSolitaire';
import FootballKick3d from '../games/FootballKick3d';
import ForestMahjong from '../games/ForestMahjong';
import FourSeasonMahjong from '../games/FourSeasonMahjong';
import FrogJumper from '../games/FrogJumper';
import FrozenMahjong from '../games/FrozenMahjong';
import FruitCubes from '../games/FruitCubes';
import FruitFlip from '../games/FruitFlip';
import FruitFlipMahjong from '../games/FruitFlipMahjong';
import FruitMahjong from '../games/FruitMahjong';
import GalaxyShooter from '../games/GalaxyShooter';
import GardenSecretHN from '../games/GardenSecretHN';
import GardenSecretHO from '../games/GardenSecretHO';
import GardenSecretHOT from '../games/GardenSecretHOT';
import GlowJongg from '../games/GlowJongg';
import GoldMiner from '../games/GoldMiner';
import GoldenAutumMahjong from '../games/GoldenAutumMahjong';
import GrabIt from '../games/GrabIt';
import GreedyWorm from '../games/GreedyWorm';
import Hangman from '../games/Hangman';
import Hashiwokakero from '../games/Hashiwokakero';
import HexCon from '../games/HexCon';
import HexStream from '../games/HexStream';
import HiddenFood from '../games/HiddenFood';
import HiddenForest from '../games/HiddenForest';
import HiddenIcons from '../games/HiddenIcons';
import HiddenKitchen from '../games/HiddenKitchen';
import HiddenLibrary from '../games/HiddenLibrary';
import HiddenPrincess from '../games/HiddenPrincess';
import HiddenSpotIndonesia from '../games/HiddenSpotIndonesia';
import HiddenSpotJewelry from '../games/HiddenSpotJewelry';
import HiddenSpotsBirds from '../games/HiddenSpotsBirds';
import HiddenToys from '../games/HiddenToys';
import HolidayMatch from '../games/HolidayMatch';
import HungrySharkArenaHorrorNight from '../games/HungrySharkArenaHorrorNight';
import HuntedWolfDefenseGame from '../games/HuntedWolfDefenseGame';
import IceCreamBar from '../games/IceCreamBar';
import Illuminate1 from '../games/Illuminate1';
import Illustration2 from '../games/Illustration2';
import Illustrations1 from '../games/Illustrations1';
import JewelMahjong from '../games/JewelMahjong';
import JigsawCities1 from '../games/JigsawCities1';
import JigsawCities2 from '../games/JigsawCities2';
import JigsawJamCars from '../games/JigsawJamCars';
import JigsawJamWorld from '../games/JigsawJamWorld';
import JollyJong2 from '../games/JollyJong2';
import JollyJong25 from '../games/JollyJong25';
import JollyJongBirds from '../games/JollyJongBirds';
import JollyJongBlitz from '../games/JollyJongBlitz';
import JollyJongDogs from '../games/JollyJongDogs';
import JollyJongMath from '../games/JollyJongMath';
import JungleConMahjong from '../games/JungleConMahjong';
import JungleMysteries from '../games/JungleMysteries';
import Kaodoku from '../games/Kaodoku';
import KickZombieVoodoo from '../games/KickZombieVoodoo';
import KidsMahjong from '../games/KidsMahjong';
import KillerSudoku from '../games/KillerSudoku';
import KinsandKnights from '../games/KinsandKnights';
import LettersDimentions from '../games/LetterDimentions';
import LetterMahjong from '../games/LetterMahjong';
import LetterTrain from '../games/LetterTrain';
import LineSandBlock2 from '../games/LineSandBlock2';
import LinkNumbers from '../games/LinkNumbers';
import LondonHO from '../games/LondonHO';
import LostInTime from '../games/LostInTime';
import LostPyramid from '../games/LostPyramid';
import LuckyClover from '../games/LuckyClover';
import MahDomino from '../games/MahDomino';
import Mahjong10 from '../games/Mahjong10';
import Mahljong3dTime from '../games/Mahjong3dTime';
import MahjongBattle from '../games/MahjongBattle';
import MahjongBlockMaya from '../games/MahjongBlockMaya';
import MahjongButterflyGarden from '../games/MahjongButterflyGarden';
import MahjongCardSolitaire from '../games/MahjongCardSolitaire';
import MahjongChain from '../games/MahjongChain';
import MahjongCollapse from '../games/MahjongCollapse';
import MahjongColors from '../games/MahjongColors';
import MahjongCubes from '../games/MahjongCubes';
import MahjongGarden from '../games/MahjongGarden';
import MahjongGarden2 from '../games/MahjongGarden2';
import MahjongMatch from '../games/MahjongMatch';
import Mahjongtitans from '../games/MahjongTitans';
import MahjongTower from '../games/MahjongTower';
import MahjongTripleDimention from '../games/MahjongTripleDimention';
import MahjongValentine from '../games/MahjongValentine';
import MahjongJourney from '../games/MahljongJourney';
import MahjongEaster from '../games/MahnjongEaster';
import MainPower from '../games/MainPower';
import Majong from '../games/Majong';
import MasterQwansMahjong from '../games/MasterQwansMahjong';
import MedievalBattle2p from '../games/MedievalBattle2p';
import MedievalCastleHL from '../games/MedievalCastleHL';
import MedievalMerge from '../games/MedievalMerge';
import MelodicTiles from '../games/MelodicTiles';
import MergeIt from '../games/MergeIt';
import MineSweeper from '../games/MineSweeper';
import MonoChromeMahjong from '../games/MonoChromeMahjong';
import MonsterEggBrawl from '../games/MonsterEggBrawl';
import MoonMahjong from '../games/MoonMahjong';
import MouseandCheese from '../games/MouseandCheese';
import MovingTiles from '../games/MovingTiles';
import MsTapMan from '../games/MsTapMan';
import MurderMafia from '../games/MurderMafia';
import MysteryParadise from '../games/MysteryParadise';
import NeonArkanoid from '../games/NeonArkanoid';
import NeonBilliards from '../games/NeonBilliards';
import NeonBreaker from '../games/NeonBreaker';
import NeonFence from '../games/NeonFence';
import NeonHex from '../games/NeonHex';
import NeonJong3d from '../games/NeonJong3d';
import NeonLights from '../games/NeonLights';
import NeonNibblet from '../games/NeonNibblet';
import NumberFill from '../games/NumberFill';
import NumbersInTheCities from '../games/NumbersInTheCities';
import NyHO from '../games/NyHO';
import OfficeHO from '../games/OfficeHO';
import Olko from '../games/Olko';
import Olko2 from '../games/Olko2';
import OneLine from '../games/OneLine';
import OppositeAttact from '../games/OppositeAttact';
import OriginalMahjong from '../games/OriginalMahjong';
import OutSpaceArkanoic from '../games/OutSpaceArkanoic';
import PairZoobies from '../games/PairZoobies';
import PalabraCodigo from '../games/PalabraCodigo';
import PandaMahjong from '../games/PandaMahjong';
import ParisHO from '../games/ParisHO';
import PartyJong from '../games/PartyJong';
import PenguinWordTwist from '../games/PenguinWordTwist';
import PetLink from '../games/PetLink';
import PileofTilesCon from '../games/PileofTilesCon';
import PileofTitles from '../games/PileofTitles';
import PinBall from '../games/PinBall';
import PlaygroundDifferences from '../games/PlaygroundDifferences';
import PlaygroundMahjong from '../games/PlaygroundMahjong';
import PoolBilliard from '../games/PoolBilliard';
import PraqueHiddenObject from '../games/PraqueHiddenObject';
import PushPuzzle from '../games/PushPuzzle';
import PyramidSolitaire from '../games/PyramidSolitaire';
import RagdollDuelBoxing from '../games/RagdollDuelBoxing';
import RailWayMysteries from '../games/RailWayMysteries';
import RapidMath from '../games/RapidMath';
import Reach2048 from '../games/Reach2048';
import RealDriftMultiplayer2 from '../games/RealDriftMultiplayer2';
import Rectangles from '../games/Rectangles';
import RescueRangers from '../games/RescueRangers';
import RestaurantHiddenDifference from '../games/RestaurantHiddenDifference';
import RetroMahjong from '../games/RetroMahjong';
import Reversi from '../games/Reversi';
import Rotris from '../games/Rotris';
import RoyalTowerMahjong from '../games/RoyalTowerMahjong';
import RuinsHiddenStars from '../games/RuinsHiddenStars';
import RuneMahjong from '../games/RuneMahjong';
import SafariMahjong from '../games/SafariMahjong';
import ScaryMemoryHalloween from '../games/ScaryMemoryHalloween';
import SeaJong from '../games/SeaJong';
import SearchtheSands from '../games/SearchtheSands';
import SenseiMahjong from '../games/SenseiMahjong';
import ShanghaiDynasty from '../games/ShanghaiDynasty';
import SheepandWolves from '../games/SheepandWolves';
import Shinro from '../games/Shinro';
import SimonSays from '../games/SimonSays';
import SlidePuzzle from '../games/SlidePuzzle';
import SlidonMahjongSlide from '../games/SlidonMahjongSlide';
import SnowBall from '../games/SnowBall';
import SnowMan from '../games/SnowMan';
import Space from '../games/Space';
import SpaceCon from '../games/SpaceCon';
import SpaceCubes from '../games/SpaceCubes';
import SpacePrisonEscape2 from '../games/SpacePrisonEscape2';
import SpaceTris from '../games/SpaceTris';
import SpaceshipLanding from '../games/SpaceshipLanding';
import SpookyMahjong from '../games/SpookyMahjong';
import SportMahjong from '../games/SportMahjong';
import SpotTheUfo from '../games/SpotTheUfo';
import SquirrelCon from '../games/SquirrelCon';
import SteamJong from '../games/SteamJong';
import StickDuelShadowFight from '../games/StickDuelShadowFight';
import StoleArt from '../games/StoleArt';
import SumJong from '../games/SumJong';
import SummerMahjong from '../games/SummerMahjong';
import SuperMarketNumbers from '../games/SuperMarketNumbers';
import SuperMetalWars from '../games/SuperMetalWars';
import SushiMahjong from '../games/SushiMahjong';
import SydneyHiddenObject from '../games/SydneyHiddenObject';
import Symbolic from '../games/Symbolic';
import TangramBird from '../games/TangramBird';
import TankDuel3d from '../games/TankDuel3d';
import TapMan from '../games/TapMan';
import Tens from '../games/Tens';
import TetrisFun from '../games/TetrisFun';
import TetrisSlide from '../games/TetrisSlide';
import TetrisSlider from '../games/TetrisSlider';
import Tetrix from '../games/Tetrix';
import TetroClassic from '../games/TetroClassic';
import TheLostWorld from '../games/TheLostWorld';
import ThePalaceHotel from '../games/ThePalaceHotel';
import ThreeDmahjong from '../games/ThreeDmahjong';
import TicTacToe from '../games/TicTacToe';
import TikiTotemsQuartet from '../games/TikiTotemsQuartet';
import TilesofEgypt from '../games/TilesofEgypt';
import TilesofJapan from '../games/TilesofJapan';
import Timecon from '../games/TimeCon';
import TimeMahjong from '../games/TimeMahjong';
import TowerTown from '../games/TowerTown';
import TrainSwitch from '../games/TrainSwitch';
import TravelLersquest from '../games/TravelLersquest';
import TreasureChest from '../games/TreasureChest';
import TreesandTents from '../games/TreesandTents';
import TrickBall from '../games/TrickBall';
import TripleCon from '../games/TripleCon';
import TripleMahjong2 from '../games/TripleMahjong2';
import Ufo2048 from '../games/Ufo2048';
import UpsideDown from '../games/UpsideDown';
import ValentineLink from '../games/ValentineLink';
import Vexed from '../games/Vexed';
import VexedZoobies from '../games/VexedZoobies';
import WallpaperCon from '../games/WallpaperCon';
import WareHouseHiddenDifference from '../games/WareHouseHiddenDifference';
import WaterFallHiddenStars from '../games/WaterFallHiddenStars';
import WeaveLine from '../games/WeaveLine';
import WhacktheMoles from '../games/WhacktheMoles';
import WhatTheHen from '../games/WhatTheHen';
import WildWestHangman from '../games/WildWestHangman';
import WildWestMahjong from '../games/WildWestMahjong';
import Woggle from '../games/Woggle';
import Woordzoeker from '../games/Woordzoeker';
import Words300 from '../games/Words300';
import WordsSearch from '../games/WordsSearch';
import WorldCruise from '../games/WorldCruise';
import WorldsGreatestCities from '../games/WorldsGreatestCities';
import WormsZoneASlitherySnake from '../games/WormsZoneASlitherySnake';
import XJong from '../games/XJong';
import Xiangqi from '../games/Xiangqi';
import YinandYang from '../games/YinandYang';
import ZombieLastCastle5 from '../games/ZombieLastCastle5';
import ZooAnimals from '../games/ZooAnimals';
import ZooMysteries from '../games/ZooMysteries';
import ZoobiesCon from '../games/ZoobiesCon';
import Vex8 from '../games/vex8';
import Nav from './Nav';


const itemsPerPage = 8;
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const games = [
    <AdayInTheMuseum />,
    <AddItUp />,
    <AddItUp2 />,
    <AddItUp3 />,
    <AirportManagement2 />,
    <AlchemistSymbol />,
    <AliceInTetrisLand />,
    <AlienInvaders />,
    <AlienInvaders2 />,
    <AllFiveDominos />,
    <AllThreesDomino />,
    <AmsterdamHiddenObject />,
    <AncientMahjong />,
    <AnimalCon2 />,
    <AnimalCon3 />,
    <AnimalCubes />,
    <AnimalsConnect />,
    <AnimalTetris />,
    <Anonogramaday />,
    <BattleShips />,
    <BbqRoast />,
    <BeeEnglish />,
    <BeijingHO />,
    <BerlinHiddenObject />,
    <BikeJump />,
    <Bingo />,
    <BirdsKyodai />,
    <BlacktoWhite />,
    <BlitzWizard />,
    <Blobs />,
    <BlockDomino />,
    <BlockMonsterExtreme1010 />,
    <BlockMonsters1010 />,
    <BlockTown />,
    <BlueLove />,
    <Bricks1010 />,
    <BrickTetris />,
    <BubbleBall />,
    <BubbleShooterWorldCup />,
    <BubbleTrouble />,
    <BugCon />,
    <CandyCon />,
    <CandyLandMahjong />,
    <CaribbeanSlide />,
    <CarParking />,
    <CarParking2 />,
    <CarromPool />,
    <CastleMahjong />,
    <CatchTheApple />,
    <CatleMysteries />,
    <Cats1010 />,
    <CatsHexjong />,
    <CelticMahjong />,
    <ChenoceauHO />,
    <Chess />,
    <ChinaMahjong />,
    <ChinaTemple />,
    <ChocolateFactory />,
    <ChocolateShop />,
    <CircusAdventures />,
    <CircusHiddenNumbers />,
    <CircusHO />,
    <CircusPair />,
    <City2048 />,
    <CityFuse />,
    <Classic1010 />,
    <ClassicFrog />,
    <ClassicMahjong />,
    <ClassicPac />,
    <ClassicSnake />,
    <ClassicWordSearch />,
    <ClearTheNumbers />,
    <CokieMonster />,
    <ColoringMandalas />,
    <ConstructionWeights />,
    <CookingChefFoodFever />,
    <CounterCombatMultiplayer />,
    <CountryLabyrinth3 />,
    <CreepyCreatures />,
    <CrossRobotRoad />,
    <CrossWords2 />,
    <CrossWords3 />,
    <CruciGramasDeldia />,
    <CruiseShipsHO />,
    <CrystalHexagon />,
    <Daily1to25 />,
    <DailyAnagramCrosswords />,
    <DailyCalcudoku />,
    <DailyCheckIt />,
    <Dailyfutoshiki />,
    <DailyHexnum />,
    <DailyHitori />,
    <DailyKakurasu />,
    <DailyKakuro />,
    <DailyLoop />,
    <DailyMahjong />,
    <DailyNet />,
    <DailyNonoGrams />,
    <DailyNumbrix />,
    <DailyShikaku />,
    <DailyStarBattle />,
    <DailyStone />,
    <DailySudoku />,
    <DailyTracks />,
    <DailyUp15 />,
    <DailyWordoku />,
    <DarkMahjong />,
    <DeadFight />,
    <DeepSeaTrijong />,
    <DigDig />,
    <DiscoverChina />,
    <DiscoverEgypt />,
    <DiscoverPetra />,
    <DiscPoolPlayer1 />,
    <DiscPoolPlayer2 />,
    <DrackAndFranc />,
    <DreamPet />,
    <DreamPetCon />,
    <DropTris />,
    <EasterMahjong />,
    <Easterpile />,
    <EmojiMahjong />,
    <EmojiPairs />,
    <EndlessBreakOut />,
    <EscapetheForest />,
    <EuropeanCities />,
    <ExtremeVexed />,
    <FairyTripleMahjong />,
    <FallingSudoku />,
    <FamousPainting />,
    <FamousPainting2 />,
    <FamousPaintings3 />,
    <FarmMahjong />,
    <FarmTown />,
    <FeedTheAnimals />,
    <FireBoyAndWaterGirl />,
    <FishResort />,
    <FlowerBurst />,
    <FlowerGarden />,
    <FlowerGarden2 />,
    <FlowerMahjong />,
    <FlowerMerge />,
    <FlowerShop />,
    <FloweSolitaire />,
    <FootballKick3d />,
    <ForestMahjong />,
    <FourSeasonMahjong />,
    <FrogJumper />,
    <FrozenMahjong />,
    <FruitCubes />,
    <FruitFlip />,
    <FruitFlipMahjong />,
    <FruitMahjong />,
    <GalaxyShooter />,
    <GardenSecretHN />,
    <GardenSecretHO />,
    <GardenSecretHOT />,
    <GlowJongg />,
    <GoldenAutumMahjong />,
    <GoldMiner />,
    <GrabIt />,
    <GreedyWorm />,
    <Hangman />,
    <Hashiwokakero />,
    <HexCon />,
    <HexStream />,
    <HiddenFood />,
    <HiddenForest />,
    <HiddenIcons />,
    <HiddenKitchen />,
    <HiddenLibrary />,
    <HiddenPrincess />,
    <HiddenSpotIndonesia />,
    <HiddenSpotJewelry />,
    <HiddenSpotsBirds />,
    <HiddenToys />,
    <HolidayMatch />,
    <HungrySharkArenaHorrorNight />,
    <HuntedWolfDefenseGame />,
    // <HuntingJackAtHome />,
    // <HuntingJackInTheCity />,
    <IceCreamBar />,
    <Illuminate1 />,
    <Illustration2 />,
    <Illustrations1 />,
    <JewelMahjong />,
    <JigsawCities1 />,
    <JigsawCities2 />,
    <JigsawJamCars />,
    <JigsawJamWorld />,
    <JollyJong2 />,
    <JollyJong25 />,
    <JollyJongBirds />,
    <JollyJongBlitz />,
    <JollyJongDogs />,
    <JollyJongMath />,
    <JungleConMahjong />,
    <JungleMysteries />,
    <Kaodoku />,
    <KickZombieVoodoo />,
    <KidsMahjong />,
    <KillerSudoku />,
    <KinsandKnights />,
    <LettersDimentions />,
    <LetterMahjong />,
    <LetterTrain />,
    <LineSandBlock2 />,
    <LinkNumbers />,
    <LondonHO />,
    <LostInTime />,
    <LostPyramid />,
    <LuckyClover />,
    <MahDomino />,
    <Mahljong3dTime />,
    <Mahjong10 />,
    <MahjongBattle />,
    <MahjongBlockMaya />,
    <MahjongButterflyGarden />,
    <MahjongCardSolitaire />,
    <MahjongChain />,
    <MahjongCollapse />,
    <MahjongColors />,
    <MahjongCubes />,
    <MahjongGarden />,
    <MahjongGarden2 />,
    <MahjongMatch />,
    <Mahjongtitans />,
    <MahjongTower />,
    <MahjongTripleDimention />,
    <MahjongValentine />,
    <MahjongJourney />,
    <MahjongEaster />,
    <MainPower />,
    <Majong />,
    <MasterQwansMahjong />,
    <MedievalBattle2p />,
    <MedievalCastleHL />,
    <MedievalMerge />,
    <MelodicTiles />,
    <MergeIt />,
    <MineSweeper />,
    <MonoChromeMahjong />,
    <MonsterEggBrawl />,
    <MoonMahjong />,
    <MouseandCheese />,
    <MovingTiles />,
    <MsTapMan />,
    <MurderMafia />,
    <MysteryParadise />,
    <NeonArkanoid />,
    <NeonBilliards />,
    <NeonBreaker />,
    <NeonFence />,
    <NeonHex />,
    <NeonJong3d />,
    <NeonLights />,
    <NeonNibblet />,
    <NumberFill />,
    <NumbersInTheCities />,
    <NyHO />,
    <OfficeHO />,
    <Olko />,
    <Olko2 />,
    <OneLine />,
    <OppositeAttact />,
    <OriginalMahjong />,
    <OutSpaceArkanoic />,
    <PairZoobies />,
    <PalabraCodigo />,
    <PandaMahjong />,
    <ParisHO />,
    <PartyJong />,
    <PenguinWordTwist />,
    <PetLink />,
    <PileofTilesCon />,
    <PileofTitles />,
    <PinBall />,
    // <PirateMysteries />,
    // <PirateSandTreasures />,
    <PlaygroundDifferences />,
    <PlaygroundMahjong />,
    <PoolBilliard />,
    <PraqueHiddenObject />,
    <PushPuzzle />,
    <PyramidSolitaire />,
    <RagdollDuelBoxing />,
    <RailWayMysteries />,
    <RapidMath />,
    <Reach2048 />,
    <RealDriftMultiplayer2 />,
    <Rectangles />,
    <RescueRangers />,
    <RestaurantHiddenDifference />,
    <RetroMahjong />,
    <Reversi />,
    <Rotris />,
    <RoyalTowerMahjong />,
    <RuinsHiddenStars />,
    <RuneMahjong />,
    <SafariMahjong />,
    <ScaryMemoryHalloween />,
    <SeaJong />,
    <SearchtheSands />,
    <SenseiMahjong />,
    <ShanghaiDynasty />,
    <SheepandWolves />,
    <Shinro />,
    <SimonSays />,
    <SlidePuzzle />,
    <SlidonMahjongSlide />,
    <SnowBall />,
    <SnowMan />,
    <Space />,
    <SpaceCon />,
    <SpaceCubes />,
    <SpacePrisonEscape2 />,
    <SpaceshipLanding />,
    <SpaceTris />,
    <SpookyMahjong />,
    <SportMahjong />,
    <SpotTheUfo />,
    <SquirrelCon />,
    <SteamJong />,
    <StickDuelShadowFight />,
    <StoleArt />,
    <SumJong />,
    <SummerMahjong />,
    <SuperMarketNumbers />,
    <SuperMetalWars />,
    <SushiMahjong />,
    <SydneyHiddenObject />,
    <Symbolic />,
    <TangramBird />,
    <TankDuel3d />,
    <TapMan />,
    <Tens />,
    <TetrisFun />,
    <TetrisSlide />,
    <TetrisSlider />,
    <Tetrix />,
    <TetroClassic />,
    <TheLostWorld />,
    <ThePalaceHotel />,
    <ThreeDmahjong />,
    <TicTacToe />,
    <TikiTotemsQuartet />,
    <TilesofEgypt />,
    <TilesofJapan />,
    <Timecon />,
    <TimeMahjong />,
    <TowerTown />,
    <TrainSwitch />,
    <TravelLersquest />,
    <TreasureChest />,
    <TreesandTents />,
    <TrickBall />,
    <TripleCon />,
    <TripleMahjong2 />,
    <Ufo2048 />,
    <UpsideDown />,
    <ValentineLink />,
    <Vex8 />,
    <Vexed />,
    <VexedZoobies />,
    <WallpaperCon />,
    <WareHouseHiddenDifference />,
    <WaterFallHiddenStars />,
    <WeaveLine />,
    <WhacktheMoles />,
    <WhatTheHen />,
    <WildWestHangman />,
    <WildWestMahjong />,
    <Woggle />,
    <Woordzoeker />,
    <Words300 />,
    <WordsSearch />,
    <WorldCruise />,
    <WorldsGreatestCities />,
    <WormsZoneASlitherySnake />,
    <Xiangqi />,
    <XJong />,
    <YinandYang />,
    <ZombieLastCastle5 />,
    <ZooAnimals />,
    <ZoobiesCon />,
    <ZooMysteries />,

  ];

  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(games.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
       <Nav/>
    
     <div className="bg-cover h-screen bg-center bg-no-repeat"
       > 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentGames.map((game, index) => (
          <div key={index} className=" p-4 flex items-center justify-center">
            {game}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center"> 
        <ReactPaginate
          previousLabel={'👈'}
          nextLabel={'👉'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex space-x-2'}
          pageLinkClassName={'px-4 py-2 rounded-lg bg-blue-500 text-white'}
          activeClassName={'bg-blue-700 text-white'} 
        />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
