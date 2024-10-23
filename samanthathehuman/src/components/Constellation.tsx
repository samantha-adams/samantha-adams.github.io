import { useRef, useTransition } from 'react';
import gsap from 'gsap';
import Star, { StarProps } from './Star';

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
          tl.to(starElements, {
            duration: 0.5,
            ease: "expoScale(0.5,7,none)",
            stroke: "#efefef",
            strokeOpacity: "0.8",
            strokeWidth: "2",
          });
          tl.to(starElements, {
            ease: "expoScale(0.5,7,none)",
            strokeWidth: 0,
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