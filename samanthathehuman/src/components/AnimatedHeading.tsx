import { useEffect, useRef } from 'react';
import './AnimatedHeading.css';
import { zoomElements } from '../utils/animate';

interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
  const headingRef = useRef<HTMLDivElement>(null);  
  const animationRan = useRef<boolean>(false);

  useEffect(() => {
    if (headingRef.current && !animationRan.current) {
      const letters = headingRef.current.querySelectorAll("span");
      zoomElements(letters);
      animationRan.current = true;
    }
  }, []);

  return (
    <div className="heading" ref={headingRef}>
      {text.split("").map((letter, index) => (
        <span key={index}>{`${letter}`}</span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
