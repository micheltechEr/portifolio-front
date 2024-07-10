import { useEffect, useState } from 'react';

// Custom hook to handle dark mode logic
const useDarkMode = () => {
  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem('site-mode') === 'dark';
  });

  useEffect(() => {
    if (isChecked) {
      document.querySelector('html').setAttribute('site-mode', 'dark');
      localStorage.setItem('site-mode', 'dark');
    } else {
      document.querySelector('html').removeAttribute('site-mode');
      localStorage.removeItem('site-mode');
    }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return [isChecked, handleToggle];
};

export default useDarkMode;
