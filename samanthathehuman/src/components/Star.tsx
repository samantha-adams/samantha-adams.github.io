import { useContext, useRef, useState } from 'react';
import gsap from 'gsap';
import { getRandomNumberInRange, getRandomOffset } from '../utils/random';
import PointerEventContext from '../context/PointerEventContext';

export interface StarProps {
  x: number;
  y: number;
  size: number;
}

const getXYShift: (angle: number) => { xShift: number, yShift: number } = (angle)=> {
  let xShift = 0;
  let yShift = 0;
  if (angle > 270) { // upper right quadrant
    xShift = 1;
    yShift = 1;
  } else if (angle <= 270 && angle > 180) { // upper left quadrant
    xShift = -1;
    yShift = 1;
  } else if (angle <= 180 && angle > 90) { // lower left quadrant
    xShift = -1;
    yShift = -1;
  } else if (angle <= 90) { // lower right quadrant
    xShift = 1;
    yShift = -1;
  }
  return { xShift, yShift }
}

const Star: React.FC<StarProps> = ({ size, x, y }) => {  
  const starRef = useRef<SVGSVGElement>(null);
  let timelineRef = useRef(gsap.timeline());

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isAnimationInProgress, setIsAnimationInProgress] = useState<boolean>(false); 

  const { mouseDirection = 0 } = useContext(PointerEventContext);
  const { xShift, yShift } = getXYShift(mouseDirection);

  const startAnimation = () => {
    if (!isAnimating) {
        setIsAnimating(true);
        setIsAnimationInProgress(true);
        timelineRef.current.set(starRef.current, { transformOrigin:"50% 50%" });
        timelineRef.current.to(starRef.current, {
          duration: 0.5,
          ease: "expoScale(0.5,7,none)",
          x: xShift * 50,
          y: yShift * 50,
        });
        timelineRef.current.to(starRef.current, {
          duration: 0.5 * getRandomNumberInRange(1, 3),
          ease: "expoScale(0.5,7,none)",
          scale: 2,  
        });
        timelineRef.current.to(starRef.current, {
          duration: 1.5 & getRandomNumberInRange(1, 5),
          ease: "expoScale(0.5,7,none)",
          x: xShift * getRandomOffset(window.innerWidth),
          y: yShift * getRandomOffset(window.innerHeight),
          scale: 0,
        });
        timelineRef.current.to(starRef.current, {
          duration: 1.5 * getRandomNumberInRange(1, 5),
          x: 0,
          y: 0,
          left: x,
          top: y,
          scale: 1,
          onComplete: endAnimation,
        });
    }
  };
  
  const pauseAnimation = () => {
    timelineRef.current.pause();
    setIsAnimating(false);
  };
  
  const continueAnimation = () => {
    timelineRef.current.play();
    setIsAnimating(true);
  };

  const endAnimation = () => {
    setIsAnimationInProgress(false);    
    setIsAnimating(false);
    gsap.timeline({ defaults: { clearProps: true } })
  };

  const handleMouseEnter = () => {
    if (starRef.current) {
      if (!isAnimationInProgress ) {
        startAnimation();
      } else if (isAnimating) {
        pauseAnimation();
      }
    }
  };

  const handleMouseLeave = () => {
    if (isAnimationInProgress && !isAnimating) {
      continueAnimation();
    }
  };

  return (
    <svg
      fill={"white"}  
      id="star"
      height={size}
      width={size}
      viewBox={`0 0 ${84} ${101}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={starRef}
      style={{
        position: 'absolute',
        left: x,
        top: y,
      }} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M46.9131 39.0118L47.0198 39.7798L47.6753 39.3658L66.5583 27.4417L54.6342 46.3247L54.2407 46.9478L54.9651 47.0831L81.2779 52L54.9651 56.9169L54.2407 57.0522L54.6342 57.6753L66.5583 76.5583L47.6753 64.6342L47.0279 64.2253L46.9139 64.9826L42 97.6397L37.0861 64.9826L36.9721 64.2253L36.3247 64.6342L17.4417 76.5583L29.3658 57.6753L29.7593 57.0522L29.0349 56.9169L2.72208 52L29.0349 47.0831L29.7593 46.9478L29.3658 46.3247L17.4417 27.4417L36.3247 39.3658L36.9802 39.7798L37.0869 39.0118L42 3.63481L46.9131 39.0118Z`} />
    </svg>
  );
};

export default Star;
