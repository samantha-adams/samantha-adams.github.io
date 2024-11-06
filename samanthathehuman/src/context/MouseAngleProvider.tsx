import { useRef, useEffect, useCallback } from "react";
import useThrottle from "../utils/hooks/useThrottle";
import PointerEventContext from "./PointerEventContext";
import { getPointerAngle } from "../utils/interaction";

const MouseAngleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseAngleRef = useRef<number | undefined>(undefined);

  const mouseAngleEventMonitor = useCallback(useThrottle((e: MouseEvent) => mouseAngleRef.current = getPointerAngle(e), 200), []);

  useEffect(() => {
    document.addEventListener('mousemove', mouseAngleEventMonitor);
    return () => {
      document.removeEventListener('mousemove', mouseAngleEventMonitor);
    }
  }, []);

  return (
    <PointerEventContext.Provider value={{ mouseAngleRef }}>
      {children}
    </PointerEventContext.Provider>
  );
};

export default MouseAngleProvider;
