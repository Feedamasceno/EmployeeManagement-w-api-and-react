import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import MainContent from "./MainContent";
import AddForm from "./AddForm.js";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/addform" element={<AddForm />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
