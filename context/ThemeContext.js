import React, { createContext, useState, useContext } from "react";
import { StyleSheet } from "react-native";

// إنشاء السياق
const ThemeContext = createContext();

// إعداد الألوان للثيم
const lightTheme = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF"
  },
  text: {
    color: "#0C0C0C"
  }
});

const darkTheme = StyleSheet.create({
  background: {
    backgroundColor: "#0C0C0C"
  },
  text: {
    color: "#FFFFFF"
  }
});

// المزود (Provider)
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        theme: isDarkMode ? darkTheme : lightTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// هوك لاستخدام السياق
export const useTheme = () => useContext(ThemeContext);
