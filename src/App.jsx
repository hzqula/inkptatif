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
      <Route path="inkptatif" element={<Login />} />
      <Route path="inkptatif/input-nilai-kp" element={<InputNilaiKP />} />
      <Route path="inkptatif/input-nilai-ta" element={<InputNilaiTA />} />
      <Route path="inkptatif/dashboard/" element={<Dashboard />} />
      <Route path="inkptatif/detail-input-kp" element={<ContentDetailKP />} />
    </Routes>
  );
};

export default App;
