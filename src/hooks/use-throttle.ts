import { useCallback, useRef } from "react";

export default function useThrottle<T extends any[]>(
  delay: number,
  func: (...args: T) => any,
) {
  const lastExecuted = useRef<number | null>(null); // callback 마지막 호출 시간

  const throttle = useCallback(
    (...args: T) => {
      const now = Date.now();

      // 첫 호출인 경우 callback을 즉시 실행합니다
      if (!lastExecuted.current) {
        lastExecuted.current = now;
        func(...args);
        return;
      }

      const timeLastExecution = now - lastExecuted.current;

      // 마지막 실행 시간이 delay 보다 크다면 callback 호출합니다
      if (timeLastExecution >= delay) {
        lastExecuted.current = now;
        func(...args);
      }
    },
    [func, delay],
  );

  return throttle;
}
