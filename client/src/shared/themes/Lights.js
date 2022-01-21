import {createTheme}  from '@mui/material'
import { yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],     // Cor principal
                                  // yellow[700] é a intensidade da cor, passe o mouse sobre a cor e verá as sugestões  
            dark: yellow[800],   // Quando passa o mouse a cor do main ficará mais escura
            light: yellow[500], // 
            contrastText: '#ffffff' // Cor do Texto
        },
        secondary: {
            main: cyan[500],     
            dark: cyan[400],     
            light: cyan[300], 
            contrastText: '#ffffff'
        },
        background: : {
            default: '#ffffff', // usado no fundo da aplicação, da página, site etc...
            paper: '#f7f6f3', // tem a base do site, a cor de fundo e o paper é usado dentro dos cards pra tá aquele destaque e diferença do funco e do card
        }
    }
});