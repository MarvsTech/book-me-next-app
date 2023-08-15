import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Doctor from "./pages/Doctor";
import Appointment from "./pages/Appointment";
import UserLog from "./pages/UserLog";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import Login from "./pages/Login";

function App() {
  const currentURL = window.location.pathname;
  const showSidebar = () => {
    const directories = currentURL.split('/');
    if (directories.length > 0) {
      if (directories[1] === 'patient' || directories[1] === 'user') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  return (
    <BrowserRouter>
      {showSidebar() ? (
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/user/log" element={<UserLog />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </Sidebar>
      ) : (
        <Routes>
          {/* Patient Page */}
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/user/login" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
