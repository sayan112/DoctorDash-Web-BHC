import { ColorModeContext, useMode } from '../utils/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import TopBar from '../components/global/TopBar';
import Navbar from '../components/global/NavBar';
import Dashboard from './dashboard';
import AppointmentsList from './appointmentsList';
import PatientList from './patientsList';
import Profile from './profile';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          {/* <Sidebar /> */}
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/patients" element={<PatientList />} />
              <Route path="/appointments" element={<AppointmentsList />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
