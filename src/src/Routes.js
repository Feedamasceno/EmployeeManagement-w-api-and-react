import React from "react";
import { Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import MainContent from "./MainContent";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}
