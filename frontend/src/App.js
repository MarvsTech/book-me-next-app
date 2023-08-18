import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PatientDashboard from "./pages/Patient/PatientDashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorUserLogs from "./pages/Doctor/DoctorUserLogs";
import DoctorSettings from "./pages/Doctor/DoctorSettings";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminDoctor from "./pages/Admin/AdminDoctor";
import AdminAppointment from "./pages/Admin/AdminAppointment";
import AdminUserLog from "./pages/Admin/AdminUserLog";

import { useAuth } from "./config/UserContext";
import Blog from "./pages/Blog";
import AdminSetting from "./pages/Admin/AdminSetting";

function App() {
  const { currentUser } = useAuth();
  const CurrentUserType = currentUser ? currentUser.roleId : 0;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/access/denied" element={<AccessDenied />} />
        <Route path="/page/not/found" element={<NotFound />} />

        <Route path="*" element={PublicElement(CurrentUserType, '')} />
        <Route path="/" element={PublicElement(CurrentUserType, 'blog')} />
        <Route path="/login" element={PublicElement(CurrentUserType, 'login')} />
        <Route path="/register" element={PublicElement(CurrentUserType, 'register')} />

        <Route path="*" element={AdminElement(CurrentUserType, '')} />
        <Route path="/admin" element={AdminElement(CurrentUserType, 'admin')}/>
        <Route path="/admin/doctors" element={AdminElement(CurrentUserType, 'admin-doctor')}/>
        <Route path="/admin/appointments" element={AdminElement(CurrentUserType, 'admin-appointment')}/>
        <Route path="/admin/user/logs" element={AdminElement(CurrentUserType, 'admin-logs')}/>
        <Route path="/admin/settings" element={AdminElement(CurrentUserType, 'admin-logs')}/>

        <Route path="*" element={DoctorElement(CurrentUserType, '')} />
        <Route path="/doctor" element={DoctorElement(CurrentUserType, 'doctor')}/>
        <Route path="/doctor/appointments" element={DoctorElement(CurrentUserType, 'doctor-appointment')}/>
        <Route path="/doctor/user/logs" element={DoctorElement(CurrentUserType, 'doctor-log')}/>
        <Route path="/doctor/settings" element={DoctorElement(CurrentUserType, 'doctor-setting')}/>

        <Route path="*" element={PatientElement(CurrentUserType, '')} />
        <Route path="/patient" element={PatientElement(CurrentUserType, 'patient')}/>

      </Routes>
    </BrowserRouter>
  );
}


function NotFound () {
  return <div>Page Not Found.</div>;
}

function AccessDenied () {
  return <div>You dont have a permission to access this page.</div>;
}

function PublicElement (roleId, page) {  
  if (roleId !== 0) {
    return <Navigate to={"/access/denied"}/>;
  } else {
    switch(page){
      case 'blog': return <Blog />
      case 'login': return <Login />
      case 'register': return <Register />
      case '': return <Navigate to={"/page/not/found"}/>
      default: return ''
    }
  }
}

function AdminElement (roleId, page) {
  if (roleId !== 1) {
    return <Navigate to={"/access/denied"}/>;
  } else {
    switch(page){
      case 'admin': return <><Sidebar roleId={roleId}><AdminDashboard /></Sidebar></>
      case 'admin-doctor': return <><Sidebar roleId={roleId}><AdminDoctor /></Sidebar></>
      case 'admin-appointment': return <><Sidebar roleId={roleId}><AdminAppointment /></Sidebar></>
      case 'admin-logs': return <><Sidebar roleId={roleId}><AdminUserLog /></Sidebar></>
      case 'admin-setting': return <><Sidebar roleId={roleId}><AdminSetting /></Sidebar></>
      case '': return <Navigate to={"/page/not/found"}/>
      default: return ''
    }
  }
}

function DoctorElement (roleId, page) {
  if (roleId !== 2) {
    return <Navigate to={"/access/denied"}/>;
  } else {
    switch(page){
      case 'doctor': return <><Sidebar roleId={roleId}><DoctorDashboard /></Sidebar></>
      case 'doctor-appointment': return <><Sidebar roleId={roleId}><DoctorAppointment /></Sidebar></>
      case 'doctor-log': return <><Sidebar roleId={roleId}><DoctorUserLogs /></Sidebar></>
      case 'doctor-setting': return <><Sidebar roleId={roleId}><DoctorSettings /></Sidebar></>
      case '': return <Navigate to={"/page/not/found"}/>
      default: return ''
    }
  }
}

function PatientElement (roleId, page) {
  if (roleId !== 3) {
    return <Navigate to={"/access/denied"}/>;
  } else {
    switch(page){
      case 'patient': return <><Navbar roleId={roleId}><PatientDashboard /></Navbar></>
      case '': return <Navigate to={"/page/not/found"}/>
      default: return ''
    }
  }
}

export default App;
