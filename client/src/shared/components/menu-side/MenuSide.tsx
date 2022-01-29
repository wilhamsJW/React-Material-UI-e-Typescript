import { Drawer, Box, useTheme } from "@mui/material"

export const MenuSide: React.FC = ({ children }) => { // children -> como este compornente é um React.FC ele pode acessar o children
                                                     // o elemento filho dele ou o children está sendo inserido  no arquivo App.tsx
                                                    // o children dele é o: <AppRoutes />    

    const theme = useTheme() // useTheme tem acesso direto a todas a informações do tema, tanto o dark como light, isso só é possivel
                            // devido a maneira q foi estruturada esses tema, no arquivo ThemeContext dá pra entender como foi feito

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)}>
                    Menu
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}> {/** spacing é uma unidade de medir do próprio material ui, cada número dado na funçãos spacing()
             * vale por 4px, se colocar 2, terá 8px, não é legal setar esses valore na mão colocando diretamente na propriedade css, assim: marginLeft: '25px', sempre use o spacing 
             */}
                {children} {/** é o elemento filho dentro de onde o MenuSide q é esse componente está sendo renderizado no file App.tsx */}
            </Box>
            
        </>
    )
}