import { useCallback, useRef } from 'react';

export type FadeOptions = {
  duration?: number;
};

export const useFade = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef<FadeOptions>({});

  const fade = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const { duration = 300 } = optionsRef.current;

    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-out`;
    containerRef.current = element.parentElement;

    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });

    return () => {
      if (!containerRef.current || !element) return;

      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.opacity = '1';
      clone.style.transition = `opacity ${duration}ms ease-out`;
      containerRef.current.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.opacity = '0';
      });

      setTimeout(() => {
        clone.remove();
      }, duration);
    };
  }, []);

  return (options: FadeOptions = {}) => {
    optionsRef.current = options;
    return fade;
  };
};
