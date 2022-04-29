import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider, DrawerProvider } from './shared/contexts'
import { AppRoutes } from './routes'
import { MenuSide } from './shared/components';


function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuSide>
            <AppRoutes />
          </MenuSide>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
