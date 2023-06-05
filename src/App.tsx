import {BrowserRouter as Router, useLocation} from 'react-router-dom';
import RoutesProvider from './utils/routes/Routes.tsx';
import Layout from "./components/core/Layout.tsx";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AppProvider } from './utils/context/AppContext.tsx';
import 'dayjs/locale/es';

function App() {
  return (
      <AppProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
              <Router>
                  <Layout>
                    <RoutesProvider />
                  </Layout>
              </Router>
          </LocalizationProvider>
      </AppProvider>
  );
}

export default App;
