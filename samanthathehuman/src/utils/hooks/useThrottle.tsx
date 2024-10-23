import { useRef, useState } from 'react';

const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const [timeout, updateTimeout] = useState<number | undefined>(undefined);
  const lastExecutedRef = useRef(Date.now());

  return (...args: any[]) => {
    const now = Date.now();
    const elapsedTime = now - lastExecutedRef.current;
    const hasCurrentTimeout = timeout !== undefined;
    if (elapsedTime >= delay) {
      if (hasCurrentTimeout) {
        clearTimeout(timeout);
      }
      lastExecutedRef.current = now;
      callback(...args);
    } else {
      if (!hasCurrentTimeout) {
        const remainingTime = delay - elapsedTime;
        updateTimeout(setTimeout(() => {
          lastExecutedRef.current = Date.now();
          callback(...args);
          updateTimeout(undefined);
        }, remainingTime));
      }
    }
  }
};

export default useThrottle;