// withIntersectionObserver.js
import React from 'react';
import useIntersectionObserver from './useIntersectionObserver.js';

const withIntersectionObserver = (WrappedComponent) => {
  return (props) => {
    const observerCallback = (entry) => {
      let lastSectionElement = document.querySelector('.section:last-child')
      if (entry.isIntersecting) {
        if(entry.target === lastSectionElement){
          entry.target.classList.add('visible');
        }
        else{
          entry.target.classList.add('visible');
        }
      } else {
        entry.target.classList.remove('visible');
      }
    };

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const ref = useIntersectionObserver(observerCallback, observerOptions);

    return <WrappedComponent ref={ref} {...props} />;
  };
};

export default withIntersectionObserver;
