import { useCallback, useEffect, useRef } from 'react';
import './Clickout.css';

interface ClickoutProps {
  key: string;
  children: React.ReactNode;
  onClickout: () => void;
};

const Clickout: React.FC<ClickoutProps> = ({ children, onClickout }) => {
  const viewRef = useRef<HTMLDivElement>(null);

  const checkForClickout = useCallback((e: Event) => {
    const currentView = viewRef.current;
    if (currentView && e.target instanceof HTMLDivElement) {
      if (currentView === e.target || currentView.contains(e.target)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      } else {
        e.stopPropagation();
        onClickout();
      }
    } 
  }, [onClickout]);
  
  useEffect(() => {
    window.addEventListener('click', checkForClickout);
    return () => {
      window.removeEventListener('click', checkForClickout);
    }
  }, []);

  return (
    <div className="clickout-wrapper" ref={viewRef}>
      {children}
    </div>
  );
};

export default Clickout;
