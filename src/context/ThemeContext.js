import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "primary"
  );

  const changeTheme = (selectedTheme) => {
    if (theme === selectedTheme) {
      return;
    }
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
