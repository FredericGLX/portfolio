import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    if (!darkTheme) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
