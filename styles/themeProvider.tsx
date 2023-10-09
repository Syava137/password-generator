import { FC, createContext, useState, Dispatch, SetStateAction, useContext } from "react";
import { THEMES, ThemeType, Color, Theme } from './theme'


interface ThemeContextProps {
    themeType: ThemeType,
    theme: Theme,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null,
}

export const ThemeContext = createContext<ThemeContextProps>({
    themeType: 'light',
    theme: THEMES['light'],
    setCurrentTheme: null,
})

interface MyProps {
    children: React.ReactNode | React.ReactElement
}


const ThemeProvider: FC<MyProps> = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')

    return ( 
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme],
            setCurrentTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)