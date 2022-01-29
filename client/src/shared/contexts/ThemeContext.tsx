import { createContext, useCallback, useState, useMemo, useContext } from 'react';

import { ThemeProvider } from '@mui/material'
import { Box } from '@mui/material'

import { LightTheme, DarkTheme } from './../themes'

/*********************************************************
 * Responsável por Manipular a troca do tema/cor na aplicação *
 *********************************************************/

// IThemeContextData --> Coloquei o I na frente pra identificar q se trata de uma interface
// e contextData sabemos que são os dados que estão dentro do contexto personalizado do tema
interface IThemeContextData {
    themeName: 'light' | 'dark',
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);
// createContext --> Estamos criando um contexto como o nome suger. Usado para quando queremos passar uma var em nível global, aqui queremos trocar o tema da aplicação por um botão, então a cor do tema tem que ser algo a nível global
// const ThemeContext = createContext({} as IThemeContextData); sobre essa linha eu tõ dizendo que
// createContext tem os dados da IThemeContextData


// Função criada para expotar o dado criado acima com createContext, aqui podemos pegar ThemeContext
// em qq lugar da aplicação apenas com uma importação, um exemplo de onde estamos pegando é no routes
// com essa linha: const { toggleTheme } = useAppThemeContext();
export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

// 'ThemeProvider: React.FC' --> O tipo React.FC é usado para representar um componente funcional(Functional Component, por isso o FC).
// isso indica que ele irá englobar minhas rotas para que a alteração de tema aconteça, ele está englobando no App.tsx
export const AppThemeProvider: React.FC = ({ children }) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        // oldThemeName é o valor anterior q tinha
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;
        return DarkTheme;
    }, [themeName])

    return (

        <ThemeContext.Provider value={{ themeName, toggleTheme }} >
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}