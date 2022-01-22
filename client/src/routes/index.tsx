import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path='/page-initial' element={<Button variant='contained' color='primary' onClick={toggleTheme} >Mudar de Cor</Button> } />

            <Route path='*' element={<Navigate to="/page-initial" />} /> 
            {/** Navigate serve como redirect, o redirect foi descontinuado em versões mais recentes
             * caso o user digite uma rota errada na url ele será redirecionado para a página principal graças ao navigate
             * Navigate irá olhar para todas as rotas acima dele e verá q não existe tal rota e redirecionará pra a prinipal
             */}
        </Routes>
    );
};