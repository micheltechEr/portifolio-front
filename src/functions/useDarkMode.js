import { useEffect, useState, useRef } from 'react';

const useDarkMode = () => {
  const osThemeDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [isChecked, setIsChecked] = useState(() => osThemeDark.matches);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false; 
      
      const storedMode = localStorage.getItem('site-mode');
      if (storedMode === 'dark') {
        setIsChecked(true); 
      } else {
        setIsChecked(false); 
      }
      return;
    }

    if (isChecked) {
      document.querySelector('html').setAttribute('site-mode', 'dark');
      localStorage.setItem('site-mode', 'dark');
    } else {
      document.querySelector('html').removeAttribute('site-mode');
      localStorage.removeItem('site-mode'); 
    }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState); 
  };

  useEffect(() => {
    const handleMediaChange = (event) => {
      if (isFirstLoad.current) return;

      if (!localStorage.getItem('site-mode')) {
        setIsChecked(event.matches); 
      }
    };

    osThemeDark.addEventListener('change', handleMediaChange);

    return () => {
      osThemeDark.removeEventListener('change', handleMediaChange);
    };
  }, [osThemeDark]);

  return [isChecked, handleToggle];
};

export default useDarkMode;
