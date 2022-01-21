import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@mui/material'

import { AppRoutes } from './routes'
import { LightTheme } from './shared/themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}> {/** ThemeProvider = Provedor de temas, cria um contexto em volta da aplicação */}
      <BrowserRouter>  {/** theme={LightTheme} ==> Estamos informando qual será o tema e  LightTheme foi criado e configurado, basta ir lá e ver */}            
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
