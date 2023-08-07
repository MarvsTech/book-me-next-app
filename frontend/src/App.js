import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Doctor from "./pages/Doctor";
import Appointment from "./pages/Appointment";
import UserLog from "./pages/UserLog";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/user/log" element={<UserLog />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
