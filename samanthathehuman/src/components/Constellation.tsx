import { useRef, useTransition } from 'react';
import gsap from 'gsap';
import Star, { StarProps } from './Star';
import { getRandomNumberInRange } from '../utils/random';

export interface ConstellationProps {
  stars: StarProps[]
}

const Constellation: React.FC<ConstellationProps> = ({ stars }) => {
  const constellationRef = useRef<HTMLDivElement>(null);
  const [isAnimating, startAnimating] = useTransition();

  const animateConstellation = () => {
    if (!isAnimating) {
      startAnimating(() => {
        if (constellationRef.current) {
          const starElements = constellationRef.current.querySelectorAll("#star");
          gsap.set(constellationRef.current, { perspective: 500 });
          const tl = gsap.timeline();
          tl.fromTo(starElements, {
            scale: 1,
          }, {
            ease: "expoScale(0.5,7,none)",
            scale: 0.9,
            duration: 1,
          });
        }
      });
    }
  }

  return (
    <div ref={constellationRef} onMouseEnter={animateConstellation}>
      {stars.map((star, index) => (
        <Star key={`star-${index}`} {...star} />
      ))}
    </div>
  )
};

export default Constellation;