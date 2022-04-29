import { createContext, useCallback, useState, useContext } from 'react';

/*********************************************************
 * Responsável por Manipular a troca do tema/cor na aplicação *
 *********************************************************/

// IThemeContextData --> Coloquei o I na frente pra identificar q se trata de uma interface
// e contextData sabemos que são os dados que estão dentro do contexto personalizado do tema
interface IDrawerContextData {
    isDrawerOpen: boolean,
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);
// createContext --> Estamos criando um contexto como o nome suger. Usado para quando queremos passar uma var em nível global, aqui queremos trocar o tema 
// da aplicação por um botão, então a cor do tema tem que ser algo a nível global
// const ThemeContext = createContext({} as IThemeContextData); sobre essa linha eu tõ dizendo que
// createContext tem os dados da IThemeContextData


// Função criada para expotar o dado criado acima com createContext, aqui podemos pegar ThemeContext
// em qq lugar da aplicação apenas com uma importação, um exemplo de onde estamos pegando é no routes
// com essa linha: const { toggleTheme } = useAppThemeContext();
export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
}

// 'ThemeProvider: React.FC' --> O tipo React.FC é usado para representar um componente funcional(Functional Component, por isso o FC).
// isso indica que ele irá englobar minhas rotas para que a alteração de tema aconteça, ele está englobando no App.tsx
export const DrawerProvider: React.FC = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Função responsável por abrir e fechar o menu, seta a var pra true e false
    const toggleDrawerOpen = useCallback(() => {
        // oldThemeName é o valor anterior q tinha
        // setIsDrawerOpen(toggleOpen => !toggleOpen) POdemos fazer dessa forma ou como na forma abaixo
        setIsDrawerOpen(isDrawerOpen => isDrawerOpen ? false : true)
    }, [])

    return (

        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }} >
            {children}
        </DrawerContext.Provider>

    )
}