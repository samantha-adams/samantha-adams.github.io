import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Star, { StarProps } from './Star';

interface ConstellationProps {
  stars: StarProps[]
}

const Constellation: React.FC<ConstellationProps> = ({ stars }) => {
  const constellationRef = useRef<HTMLDivElement | null>(null);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (constellationRef.current && isTriggered) {
      gsap.to(constellationRef.current, {
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
        x: -500,
      });
      gsap.to(constellationRef.current, {
        stagger: 0.5,
        ease: "expoScale(0.5,7,none)",
        x: 0,
      });
    }    
  }, [isTriggered]);
  return (
    <div ref={constellationRef} onMouseEnter={() => setIsTriggered(true)} onMouseLeave={() => setIsTriggered(false)}>
      {stars.map((star, index) => (
        <Star key={`star-${index}`} {...star} />
      ))}
    </div>
  )
};

export default Constellation;