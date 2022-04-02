import React, { createContext, useContext } from "react";
import useThemeHook from "../hooks/useTheme";


const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
    const value = useThemeHook();

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
