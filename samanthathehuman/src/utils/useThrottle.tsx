const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const timeoutRef: { current: number | undefined } = { current: undefined };
  const lastExecutedRef = { current: 0 };

  return (...args: any[]) => {
    const now = Date.now();
    const elapsedTime = now - lastExecutedRef.current;
    const hasCurrentTimeout = timeoutRef.current != undefined;
    if (elapsedTime >= delay) {
      if (hasCurrentTimeout) {
        clearTimeout(timeoutRef.current);
      }
      lastExecutedRef.current = now;
      callback(...args);
    } else {
      if (!hasCurrentTimeout) {
        const remainingTime = delay - elapsedTime;
        timeoutRef.current = setTimeout(() => {
          lastExecutedRef.current = Date.now();
          callback(...args);
          timeoutRef.current = undefined;
        }, remainingTime);
      }
    }
  }
};

export default useThrottle;