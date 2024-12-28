import React from 'react'
import { useState } from 'react'
import ThemeContext from './ThemeContext'


function ThemeContextProvider({children }) {

    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    }

  return (
    <ThemeContext.Provider value={{themeMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
