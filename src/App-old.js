import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Navbar from './scenes/global/Navbar';
// import Sidebar from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard/Dashboard';
import Appointment from './scenes/appoint/Appoint';
import Contacts from './scenes/patients/Patients';
import MeetingInfo from './scenes/infomeeting/InfoMeeting';
import ProfileUpdate from './scenes/updateprofile/UpdateProfile';
import Line from './scenes/line/Line';
import Calendar from './scenes/calendar/Calender';
// import Meeting from "./scenes/meeting/Meeting";
import Home from './scenes/appointment/Home';
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
            <Topbar />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/appoint" element={<Appointment />} />
              <Route path="/patientlist" element={<Contacts />} />
              <Route path="/infomet" element={<MeetingInfo />} />
              <Route path="/profileupdate" element={<ProfileUpdate />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/joinmeeting" element={<Home />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
