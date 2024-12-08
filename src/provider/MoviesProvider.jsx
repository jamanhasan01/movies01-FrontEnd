import { createContext, useState, useEffect } from "react";

export const moviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setmovies] = useState(null);
  const [loading, setloading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Update the document's theme attribute whenever the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const moviesInfo = {
    movies,
    setmovies,
    loading,
    setloading,
    theme,
    toggleTheme,
  };

  return (
    <moviesContext.Provider value={moviesInfo}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
