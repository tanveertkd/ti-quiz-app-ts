import { useTheme } from '../contexts';

const useThemeHook = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem('currentTheme', theme === 'light' ? 'dark' : 'light');
    };
    return { theme, toggleTheme };
};

export { useThemeHook };
