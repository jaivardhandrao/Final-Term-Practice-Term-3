import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('English');

    return (
        <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;