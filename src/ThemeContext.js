import React from 'react';

const themePalettes = {
    light: {
      background: "white",
      color: "black",
      borderColor: "#ccc",
    },
    dark: {
      background: "black",
      color: "white",
      borderColor: "#444",
    },
    custom: {
      background: "#4f48af",
      color: "#a8ff64",
      borderColor: "#ff94f9",
    }
  };

const ThemeContext = React.createContext(themePalettes.light);
export default ThemeContext;