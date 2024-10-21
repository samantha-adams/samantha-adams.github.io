import { createContext, useEffect, useState } from 'react';
import './App.css';
import StarField from './components/StarField';
import useThrottle from './utils/useThrottle';

interface PointerEventContextProps {
  mouseDirection: number | undefined,
};

export const PointerEventContext = createContext<PointerEventContextProps>({ mouseDirection: undefined });

const App: React.FC = () => {
  const [mouseDirection, setMouseDirection] = useState<number | undefined>(undefined);
  let prevX = 0;
  let prevY = 0;

  useEffect(() => {
    const listener = useThrottle((e) => {
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;
  
      // Calculate the angle in radians
      const angle = Math.atan2(deltaY, deltaX); 
  
      // Convert to degrees
      const degrees = angle * (180 / Math.PI);
  
      // Adjust for negative angles
      const direction = (degrees + 360) % 360; 
  
      setMouseDirection(direction);
  
      prevX = e.clientX;
      prevY = e.clientY;
    }, 200);
    document.addEventListener('mousemove', listener);
    return () => {
      document.removeEventListener('mousemove', listener);
    }
  }, [])

  return (
    <div className="app-container">
      <PointerEventContext.Provider value={{ mouseDirection }}>
        <StarField />
      </PointerEventContext.Provider>
    </div>
  );
};

export default App;
