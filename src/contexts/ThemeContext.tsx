import React, { createContext, useContext, useState } from "react";

type themeType = {
    theme: string|null;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

type childrenType = {
    children: React.ReactNode;
}

const ThemeContext = createContext({} as themeType);

const ThemeContextProvider = ({children} : childrenType) => {
    const [theme, setTheme] = useState(localStorage.getItem("currentTheme") || "light");

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if(context === undefined) throw new Error("Theme context must be defined");
    return context; 
}

export { ThemeContextProvider, useTheme };