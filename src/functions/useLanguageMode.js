import { useEffect, useState, useRef } from 'react';

const useLanguageMode = () => {
  const osLanguageMode = Intl.DateTimeFormat().resolvedOptions().locale; 
  const [isChecked, setIsChecked] = useState(() => {
    const storedMode = localStorage.getItem('site-language');
    return storedMode === 'pt-BR' || (storedMode === null && osLanguageMode === 'pt-BR');
  });

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false; 
      return; 
    }

    if (isChecked) {
      document.querySelector('html').setAttribute('lang', 'pt');
      localStorage.setItem('site-language', 'pt');
    } else {
      document.querySelector('html').setAttribute('lang','en');
      localStorage.setItem('site-language','en'); 
    }
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState); 
  };

  return [isChecked, handleToggle];
};

export default useLanguageMode;
