import { 
    Drawer,
    Box, 
    useTheme, 
    Divider, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    ListItem
 } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';

export const MenuSide: React.FC = ({ children }) => { // children -> como este compornente é um React.FC ele pode acessar o children
    // o elemento filho dele ou o children está sendo inserido  no arquivo App.tsx
    // o children dele é o: <AppRoutes />    

    const theme = useTheme() // useTheme tem acesso direto a todas a informações do tema, tanto o dark como light, isso só é possivel
    // devido a maneira q foi estruturada esses tema, no arquivo ThemeContext dá pra entender como foi feito

    return (
        <>
            <Drawer variant='permanent'>

                <Box width={theme.spacing(28)} display='flex' height='100%' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar
                            sx={{ height: theme.spacing(12), maxWidth: theme.spacing(62) }}
                            src="assets/avatar.png"
                        />
                    </Box>
                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home Page" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>

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