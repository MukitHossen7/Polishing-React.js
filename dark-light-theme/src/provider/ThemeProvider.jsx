import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const handleToggleButton = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, handleToggleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};
