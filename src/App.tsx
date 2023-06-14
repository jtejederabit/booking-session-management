import {BrowserRouter} from 'react-router-dom';
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
              <BrowserRouter>
                  <Layout>
                    <RoutesProvider />
                  </Layout>
              </BrowserRouter>
          </LocalizationProvider>
      </AppProvider>
  );
}

export default App;
