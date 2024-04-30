import React from "react";
import "./components/styling/App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import Help from "./pages/Help"; 
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import About from "./pages/about"; 
import Conditions from "./pages/conditions";
import HowToUse from "./pages/how_to_use";
import FilterOption from "./pages/FilterOption"; 
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/how_to_use" element={<HowToUse />} />
        <Route path="/Filter-Option" element={<FilterOption />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;