import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Doctor from "./pages/Admin/Doctor";
import Appointment from "./pages/Admin/Appointment";
import UserLog from "./pages/Admin/UserLog";
import Setting from "./pages/Admin/Setting";
import Sidebar from "./components/Sidebar";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorUserLogs from "./pages/Doctor/DoctorUserLogs";
import DoctorSettings from "./pages/Doctor/DoctorSettings";

function App() {
  const currentURL = window.location.pathname;
  const showSidebar = () => {
    const directories = currentURL.split("/");
    if (directories.length > 0) {
      if (directories[1] === "patient" || directories[1] === "user") {
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
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/admin/doctor" element={<Doctor />} />
            <Route path="/admin/appointment" element={<Appointment />} />
            <Route path="/doctor/appointment" element={<DoctorAppointment />} />
            <Route path="admin/user/log" element={<UserLog />} />
            <Route path="/doctor/user/log" element={<DoctorUserLogs />} />
            <Route path="/admin/settings" element={<Setting />} />
            <Route path="/doctor/settings" element={<DoctorSettings />} />
          </Routes>
        </Sidebar>
      ) : (
        <Routes>
          {/* Patient Page */}
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
