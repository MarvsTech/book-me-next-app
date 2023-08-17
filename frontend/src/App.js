import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Doctor from "./pages/Admin/Doctor";
import Appointment from "./pages/Admin/Appointment";
import UserLog from "./pages/Admin/UserLog";
import Setting from "./pages/Admin/Setting";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorUserLogs from "./pages/Doctor/DoctorUserLogs";
import DoctorSettings from "./pages/Doctor/DoctorSettings";
import AdminDashboard from "./pages/Admin/AdminDashboard";

import { useAuth } from "./config/UserContext";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <RoleBasedRoutes />
    </BrowserRouter>
  );
}

function RoleBasedRoutes() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      switch (currentUser.roleId) {
        case 1:
          navigate("/admin/dashboard");
          break;
        case 2:
          navigate("/doctor/dashboard");
          break;
        case 3:
          navigate("/patient/dashboard");
          break;
        default:
          navigate("/user/login");
      }
    } else {
      navigate("/blog");
    }
  }, [navigate, currentUser]);

  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/doctor/*" element={<DoctorRoutes />} />
      <Route path="/patient/*" element={<PatientRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/user/log" element={<UserLog />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </Sidebar>
  );
}

function DoctorRoutes() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/user/log" element={<DoctorUserLogs />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/settings" element={<DoctorSettings />} />
        <Route path="/appointment" element={<DoctorAppointment />} />
      </Routes>
    </Sidebar>
  );
}

function PatientRoutes() {
  return (
    <Navbar>
      <Routes>
        <Route path="/dashboard" element={<PatientDashboard />} />
      </Routes>
    </Navbar>
  );
}

function UserRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
