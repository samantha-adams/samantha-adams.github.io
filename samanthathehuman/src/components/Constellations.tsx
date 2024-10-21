import { useMemo } from 'react';
import { getRandomStars } from '../utils/randomStars';
import Constellation from './Constellation';
import { StarProps } from './Star';

interface Constellation {
  stars: StarProps[];
}

const CONSTELLATION_COUNT = 100;

const generateConstellations = (): Constellation[] => {
  const constellations = [];
  for (let i = 0; i < CONSTELLATION_COUNT; i++) {
    const stars = getRandomStars();
    constellations.push({ stars });
  }
  return constellations;
};

const Constellations: React.FC = () => {
  const generatedConstellations = useMemo(() => generateConstellations(), []);
  return (
    <div className="constellations" >
      {generatedConstellations.map((constellation, index) => (
        <Constellation key={`constellation-${index}`} stars={constellation.stars} />
      ))}
    </div>
  );
};

export default Constellations;
