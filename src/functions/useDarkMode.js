import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const osThemeDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [isChecked, setIsChecked] = useState(() => {
    const storedMode = localStorage.getItem('site-mode');
    console.log("Initial load - storedMode:", storedMode);
    if (storedMode === 'dark') {
      return true; 
    } else if (storedMode === 'light') {
      return false; 
    } else {
      return osThemeDark.matches; 
    }
  });

  useEffect(() => {
    const applyTheme = (checked) => {
      if (checked) {
        document.querySelector('html').setAttribute('site-mode', 'dark');
        localStorage.setItem('site-mode', 'dark');
        console.log('Dark mode applied:', checked);
      } else {
        document.querySelector('html').removeAttribute('site-mode');
        localStorage.setItem('site-mode', 'light');
        console.log('Light mode applied:', checked);
      }
    };

    applyTheme(isChecked);
  }, [isChecked]);

  useEffect(() => {
    const storedMode = localStorage.getItem('site-mode'); 
    if (!storedMode) {
      const handleMediaChange = (event) => {
        console.log('OS theme changed:', event.matches);
        setIsChecked(event.matches);
      };

      osThemeDark.addEventListener('change', handleMediaChange);

      return () => {
        osThemeDark.removeEventListener('change', handleMediaChange);
      };
    }
  }, [osThemeDark]);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return [isChecked, handleToggle];
};

export default useDarkMode;
