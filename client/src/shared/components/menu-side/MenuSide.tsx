import {
    Drawer,
    Box,
    useTheme,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    useMediaQuery
} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';
import { useNavigate } from "react-router";
import { useAppDrawerContext } from "../../contexts";

interface IListItemLinkProps {
    label: string,
    icon: string,
    to: string,
    //onClick: () => void | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ label, icon, to  }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        //onClick?.(); // onClick?.() -> Uma validação do TypeScript, a interrogação fuciona como um IF, se a função existir
                    // vai ser chamada, poderia usar apenas um IF assim: if (onClick) onClick() ou onClick && onClick()
    }

    return (
        <ListItemButton>
            <ListItemIcon>
                <InboxIcon>{icon}</InboxIcon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const MenuSide: React.FC = ({ children }) => { // children -> como este compornente é um React.FC ele pode acessar o children
    // o elemento filho dele ou o children está sendo inserido  no arquivo App.tsx
    // o children dele é o: <AppRoutes />    

    const theme = useTheme() // useTheme tem acesso direto a todas a informações do tema (e acesso direto a funções nativas do próprio MAterial UI), tanto o dark como light, isso só é possivel
    // devido a maneira q foi estruturada esses tema, no arquivo ThemeContext dá pra entender como foi feito

    const smDown = useMediaQuery(theme.breakpoints.down('sm')); // theme.breakpoints.down('sm') --> o Down é nativo do material ui, em português é baixo
    // ou seja, se tiver abaixo ou down de 'sm', 'sm' quer dizer a largura de celular ou q está abaixo de tablet, então daí eu faço o que quiser
    // para mais informações entre no site do material ui e busque por customization / brakpoint. (https://mui.com/pt/material-ui/customization/breakpoints/#default-breakpoints)

    const {isDrawerOpen, toggleDrawerOpen} = useAppDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

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
                                <ListItemLink 
                                    icon='Home'
                                    label='Home PAge'
                                    to='/home-page'
                                    //onClick={toggleDrawerOpen}
                                />
                            </ListItem>
                        </List>
                    </Box>

                </Box>

            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}> {/** spacing é uma unidade de medir do próprio material ui, cada número dado na funçãos spacing()
             * vale por 4px, se colocar 2, terá 8px, não é legal setar esses valore na mão colocando diretamente na propriedade css, assim: marginLeft: '25px', sempre use o spacing 
             */}
                {children} {/** é o elemento filho dentro de onde o MenuSide q é esse componente está sendo renderizado no file App.tsx */}
            </Box>

        </>
    )
}