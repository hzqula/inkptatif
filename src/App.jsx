import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InputNilaiKP from "./pages/InputNilaiKP";
import InputNilaiTA from "./pages/InputNilaiTA";
import Login from "./pages/Login";
import ContentDetailKP from "./layouts/kp/ContentDetailKP";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="input-nilai-kp" element={<InputNilaiKP />} />
      <Route path="input-nilai-ta" element={<InputNilaiTA />} />
      <Route path="dashboard/" element={<Dashboard />} />
      <Route path="detail-input-kp" element={<ContentDetailKP />} />
    </Routes>
  );
};
export default App;
