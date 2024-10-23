import { useRef, useEffect, useCallback } from "react";
import useThrottle from "../utils/hooks/useThrottle";
import PointerEventContext from "./PointerEventContext";
import { getPointerDirection } from "../utils/interaction";

const MouseDirectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseDirection = useRef<number | undefined>(undefined); 

  const mouseDirectionEventMonitor = useCallback(useThrottle((e: MouseEvent) => mouseDirection.current = getPointerDirection(e), 200), []);

  useEffect(() => {
    document.addEventListener('mousemove', mouseDirectionEventMonitor);
    return () => {
      document.removeEventListener('mousemove', mouseDirectionEventMonitor);
    }
  }, []);

  return (
    <PointerEventContext.Provider value={{ mouseDirection: mouseDirection.current }}>
      {children}
    </PointerEventContext.Provider>
  );
};

export default MouseDirectionProvider;
