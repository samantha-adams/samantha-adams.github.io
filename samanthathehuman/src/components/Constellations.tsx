import { useEffect, useState } from 'react';
import { getRandomStars } from '../utils/randomStars';
import Constellation, { ConstellationProps } from './Constellation';

const generateConstellations = (count: number): ConstellationProps[] => {
  const constellations = [];
  for (let i = 0; i < count; i++) {
    const stars = getRandomStars();
    constellations.push({ stars });
  }
  return constellations;
};

const Constellations: React.FC<{ count?: number }> = ({ count=1 }) => {
  const [constellations, setConstellations] = useState(generateConstellations(count));
  useEffect(() => {
    const makeNewConstellations = () => {
      setConstellations(generateConstellations(count));
    }
    window.addEventListener('resize', makeNewConstellations);
    return () => window.removeEventListener('resize', makeNewConstellations);
  }, []);
  
  return (
    <div className="constellations" >
      {constellations.map((constellation, index) => (
        <Constellation key={`constellation-${index}`} stars={constellation.stars} />
      ))}
    </div>
  );
};

export default Constellations;
