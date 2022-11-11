import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    if (!darkTheme) {
      setDarkTheme(true);
      console.log('Dark theme on');
    } else {
      setDarkTheme(false);
      console.log('Light theme on');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
