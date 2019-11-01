import React from 'react';
import useDarkMode from './useDarkMode';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid='toggle-button'
        />
      </div>
  );
};

export default ToggleButton;
