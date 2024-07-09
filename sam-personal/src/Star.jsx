import './App.css';
import React, { useState } from 'react';

const Star = ({ size, fill = "white", x, y }) => {
  const [isHovered, setIsHovered] = useState(false);
  const starSize = isHovered ? size * 1.5 : size;

  const viewBoxSize = Math.max(x, y, starSize * 2);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      width={starSize}
      height={starSize}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        cursor: 'pointer',
        transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out'
      }} 
    >
      <path d="M17 0L20.6287 12.7149L33.4545 9.5L24.2574 19L33.4545 28.5L20.6287 25.2851L17 38L13.3713 25.2851L0.545517 28.5L9.74265 19L0.545517 9.5L13.3713 12.7149L17 0Z" />
    </svg>
  );
};

export default Star;
