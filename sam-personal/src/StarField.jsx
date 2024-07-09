import './App.css';
import Constellation from './Constellation.jsx';

const CONSTELLATION_COUNT = 40;
const MAX_STAR_NUM = 12;
const MIN_STAR_NUM = 3;

const getRandomNumberInRange = (max, min) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const getRandomXYAndSize = (offset) => (
  { 
    x: getRandomNumberInRange(offset, 500 + offset),
    y: getRandomNumberInRange(offset, 500 + offset),
    size: getRandomNumberInRange(10, 150),
  }
);

const generateConstellations = () => {
  const constellations = []
  for (let i = 0; i < CONSTELLATION_COUNT; i++) {
    const numStars = getRandomNumberInRange(MAX_STAR_NUM, MIN_STAR_NUM);
    const constellationOffset = getRandomNumberInRange(1, 1000)
    const stars = [];
    for (let j = 0; j < numStars; j++) {
      stars.push(getRandomXYAndSize(constellationOffset))
    }
    constellations.push({ stars });
  } 
  return constellations;
}

const StarField = () => (
  generateConstellations().map((constellation) => <Constellation {...constellation} />)
);

export default StarField;

