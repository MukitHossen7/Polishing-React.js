import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  if (theme) {
    document.querySelector("#root").classList.add("dark");
  } else {
    document.querySelector("#root").classList.remove("dark");
  }
  const handleToggleButton = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};
