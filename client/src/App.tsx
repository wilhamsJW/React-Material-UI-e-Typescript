import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts'
import { AppRoutes } from './routes'
import { MenuSide } from './shared/components';


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <MenuSide>
          <AppRoutes />
        </MenuSide>
        

      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
