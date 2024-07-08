// useIntersectionObserver.js
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        callback(entry, observerInstance);
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options, callback]);

  return elementRef;
};

export default useIntersectionObserver;
